<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use App\Traits\ImagesTrait;
use Illuminate\Http\Request;
use App\Models\File as FileModel;
use App\Http\Requests\StoreRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\CreateFolderRequest;



class FileController extends Controller
{
    use ImagesTrait;
    protected $file = 'file/';
    protected $fileModel;
    protected $folder;

    public function __construct(FileModel $fileModel, Folder $folder)
    {
        $this->fileModel = $fileModel;
        $this->folder = $folder;
    }

    public function showform()
    {
        try {
            $files = $this->fileModel::all();
            $folders = $this->folder::whereNull('parent_folder_id')->get();
            $childFolders = $this->folder::whereNotNull('parent_folder_id')->get();

            return view('file_manager', compact('files', 'folders', 'childFolders'));
        } catch (\Exception $e) {
            logError($e, 500);
            return back()->with('error', 'Something Went Wrong.')->withInput();
        }
    }

    function storeFile(StoreRequest $request)
    {
        try {
            $folderID = $request->folderID;
            $folderDetails = $this->folder::findOrFail($folderID);

            $file = $request->file('file');
            $size = $file->getSize();

            $existingFile = $this->fileModel::where('original_name', $request->file('file')->getClientOriginalName())
                ->inFolder($folderID)
                ->exists();

            if (!$existingFile) {
                if ($request->hasFile('file')) {
                    $filename = $this->uploadMedia($file, false, null, 'file', $this->file . $folderDetails->folder_name);
                    $this->fileModel::create(['original_name' => $filename, 'folder_id' => $folderID, 'size' => $size]);

                    $files = $this->fileModel::inFolder($folderID)->get();
                    $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

                    $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
                    return response()->json(['success' => true, 'message' => 'File uploaded successfully.', 'html' => $html]);
                }
            } else {
                $originalName = $request->file('file')->getClientOriginalName();
                $fileName = pathinfo($originalName, PATHINFO_FILENAME);
                $extension = pathinfo($originalName, PATHINFO_EXTENSION);

                return response()->json([
                    'success' => false,
                    'message' => 'File already exists.',
                    'fileName' => $fileName,
                    'extension' => $extension,
                    'folderID' => $request->folderID,
                ]);
            }

            return response()->json(['error' => 'No file uploaded.'], 422);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'Something went wrong.'], 500);
        }
    }


    public function manageFileUpload(Request $request)
    {
        $radioValue = $request->radioValue;
        $changeFileName = $request->changeFileName;
        $fileExtension = $request->fileExtension;
        $fullChangeFileName = $changeFileName . '.' . $fileExtension;

        $folderID = $request->folderID;
        $file = $request->file('file');

        $folderDetails = $this->folder::findOrFail($folderID);
        $fileDetails = $this->fileModel::where('original_name', $fullChangeFileName)->first();

        if ($request->hasFile('file')) {
            $size = $file->getSize();

            switch ($radioValue) {
                case 'SetNewName':
                    $filename = $this->uploadMedia($file, false, null, 'file', $this->file . $folderDetails->folder_name, $fullChangeFileName);
                    $this->fileModel::create(['original_name' => $filename, 'folder_id' => $folderID, 'size' => $size]);
                    break;

                case 'Overwrite':
                    $oldFileName = basename($fileDetails->original_name);
                    $filename = $this->uploadMedia($file, true, $oldFileName, 'file', $this->file . $folderDetails->folder_name);
                    $fileDetails->update(['original_name' => $filename, 'folder_id' => $folderID, 'size' => $size]);
                    break;

                case 'AutoRename':
                    $oldFileName = basename($fileDetails->original_name);
                    $fileCount = $this->fileModel::inFolder($folderID)
                        ->where('original_name', 'like', $changeFileName . '%')
                        ->count();
                    $newFileName = ($fileCount > 0) ? $changeFileName . '(' . ($fileCount + 1) . ')' : $oldFileName;
                    $newFileNameWithExtension = $newFileName . '.' . $fileExtension;
                    $filename = $this->uploadMedia($file, true, $oldFileName, 'file', $this->file . $folderDetails->folder_name, $newFileNameWithExtension);
                    $this->fileModel::create(['original_name' => $filename, 'folder_id' => $folderID, 'size' => $size]);
                    break;
            }

            $files = $this->fileModel::inFolder($folderID)->get();
            $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
            return response()->json(['success' => true, 'message' => 'File uploaded successfully.', 'html' => $html]);
        }
    }


    public function filterFilesByName(Request $request)
    {
        try {
            $searchFileName = $request->searchFileName ?? '';
            $folderID = $request->folderID;

            $files = $this->fileModel::search($searchFileName)
                ->when($folderID, function ($query) use ($folderID) {
                    return $query->inFolder($folderID);
                })
                ->get();

            // $html = View::make('partials.files_table', compact('files'))->render();
            $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);

            return response()->json(['html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while filtering files.']);
        }
    }

    public function checkFolderAvailability(Request $request)
    {
        try {
            $folderName = $request->folder_name;

            if (empty($folderName)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please enter a valid folder new name'
                ], 200);
            }

            if (!preg_match('/^[a-zA-Z0-9_\W-]+$/', $folderName)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid characters in the folder name. Use only letters, numbers, underscores, white space and hyphens.'
                ], 200);
            }


            $folderExists = $this->folder::where('folder_name', $folderName)->exists();

            return response()->json([
                'success' => !$folderExists,
                'message' => $folderExists ? 'Folder with this name already exists.' : 'Folder name is available.'
            ], 200);

        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['success' => false, 'error' => 'Something went wrong.'], 500);
        }

    }

    public function createFolder(CreateFolderRequest $request)
    {
        try {
            $folderName = $request->folder_name;
            $folderID = $request->folderID;


            $checkExistOrNot = $this->folder::where('folder_name', $folderName)->exists();

            if ($checkExistOrNot) {
                return response()->json(['success' => false, 'message' => 'Folder already exists'], 200);
            }

            $storagePath = public_path('storage/file/' . $folderName);

            // Check if the folder already exists or not if not then create new one
            if (!File::exists($storagePath)) {
                mkdir($storagePath, 0755, true);
            }
            if ($folderID == null) {
                $folderID = null;
            }

            $newFolder = $this->folder::create(['folder_name' => $folderName, 'parent_folder_id' => $folderID]);
            $view = view('partials.new_folder', compact('newFolder'))->render();

            return response()->json(['success' => true, 'message' => 'Folder created successfully', 'view' => $view], 200);


        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['success' => false, 'error' => 'Something went wrong.'], 500);
        }
    }

    public function showFolderImages(Request $request)
    {
        try {
            if (!$request->folderId == null) {
                $folders = $this->folder::findOrFail($request->folderId);
                $files = $folders->files;
                $childFolders = $this->folder::where('parent_folder_id', $request->folderId)->get();
            } else {
                $files = $this->fileModel::all();
                $childFolders = $this->folder::where('parent_folder_id')->get();
            }

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
            return response()->json(['html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while filtering files.']);
        }
    }

    public function deleteFile(Request $request)
    {
        try {
            $fileDetails = $this->fileModel::findOrFail($request->fileId);
            $folderID = $fileDetails->folder_id;
            $folderDetails = $this->folder::findOrFail($folderID);

            $this->deleteImage($this->file . $folderDetails->folder_name . '/', basename($fileDetails->original_name));

            $fileDetails->delete();

            $files = $this->fileModel::inFolder($folderID)->get();
            $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
            return response()->json(['success' => true, 'html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['success' => false, 'error' => 'Something went wrong.'], 500);
        }
    }

    public function layoutList(Request $request)
    {
        try {
            $searchFileName = $request->searchFileName ?? '';
            $folderID = $request->folderId;

            $files = $this->fileModel::search($searchFileName)
                ->when($folderID, function ($query) use ($folderID) {
                    return $query->inFolder($folderID);
                })
                ->get();

            // $html = View::make('partials.list_view', compact('files'))->render();
            $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);

            return response()->json(['html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while filtering files.']);
        }
    }

    public function filterFiles(Request $request)
    {
        try {
            $selectedValue = $request->selectedValue;
            $folderID = $request->folderID;

            // Initialize the query with the File model
            $query = $this->fileModel::query();

            // If folderId is present, filter files based on folderId
            if (!is_null($folderID)) {
                $query->inFolder($folderID);
            }

            // Apply sorting based on the selected value
            switch ($selectedValue) {
                case 'Size':
                    // $query->orderByRaw('CAST(size AS UNSIGNED) asc');
                    $query->orderBy('size', 'desc');
                    break;
                case 'Date':
                    $query->orderBy('created_at', 'desc');
                    break;
                case 'A-Z':
                    $query->orderBy('original_name', 'asc');
                    break;
                case 'Z-A':
                    $query->orderBy('original_name', 'desc');
                    break;
            }

            // Fetch the filtered and sorted files
            $files = $query->get();

            // Generate HTML or perform other actions as needed
            $childFolders = $this->folder::where('parent_folder_id', $folderID)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);

            return response()->json(['html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while filtering files.']);
        }

    }


    public function renameFolder(Request $request)
    {
        try {
            // Validate the incoming request data
            $request->validate([
                'folderId' => 'required|numeric',
                'newFolderName' => 'required|string|max:50',
            ]);

            $folder = $this->folder::findOrFail($request->folderId);

            // Check if the folder exists
            if (!$folder) {
                return response()->json(['error' => 'Folder not found'], 404);
            }

            // Old and new folder names
            $oldFolderName = $folder->folder_name;
            $newFolderName = $request->input('newFolderName');

            // Update the folder name in the database
            $folder->folder_name = $newFolderName;
            $folder->save();


            // Rename the folder in storage
            $oldFilePath = public_path("storage/{$this->file}{$oldFolderName}");
            $newFilePath = public_path("storage/{$this->file}{$newFolderName}");

            File::move($oldFilePath, $newFilePath);

            // You can return a success response if needed
            return response()->json(['success' => 'Folder renamed successfully']);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while renaming the folder.']);
        }
    }

    public function renameFile(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'newFileName' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json(['success' => false, 'message' => 'Please enter the new file name']);
            }

            $file = $this->fileModel->findOrFail($request->fileId);
            $folder = $this->folder->findOrFail($file->folder_id);

            if ($this->fileModel->where('original_name', $request->newFileName)->exists()) {
                return response()->json(['success' => false, 'message' => 'File with this name already exists.'], 400);
            }

            $oldFileNameWithExtension = $file->original_name;
            $extension = pathinfo($oldFileNameWithExtension, PATHINFO_EXTENSION);
            $newFileNameWithExtension = $request->newFileName . '.' . $extension;

            $file->original_name = $newFileNameWithExtension;
            $file->save();

            $filePaths = $this->generateFilePaths($folder, basename($oldFileNameWithExtension), $newFileNameWithExtension);

            File::move($filePaths['oldFilePath'], $filePaths['newFilePath']);

            $childFolders = $this->folder::where('parent_folder_id', $file->folder_id)->get();

            $html = $this->generateHtmlForLayout($request->layout, $folder->files, $childFolders);
            return response()->json(['success' => true, 'message' => 'File renamed successfully.', 'html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['error' => 'An error occurred while renaming the file.']);
        }
    }

    public function checkFileAvailability(Request $request)
    {
        try {
            $fileName = $request->fileName;
            $fileExtension = $request->fileExtension;
            $folderID = $request->folderID;


            if (empty($folderID)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Unable to rename file. Please select a folder before renaming the file.'
                ], 200);
            }

            if (empty($fileName)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Please enter a valid file new name'
                ], 200);
            }

            if (!preg_match('/^[a-zA-Z0-9_-]+$/', $fileName)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid characters in the file name. Use only letters, numbers, underscores, and hyphens.'
                ], 200);
            }

            $fullFileName = $fileName . '.' . $fileExtension;

            $fileExists = $this->fileModel
                ->inFolder($folderID)
                ->where('original_name', $fullFileName)
                ->exists();

            $responseMessage = $fileExists ? 'This file name is already in use. Please choose a different name.' : 'File name is available.';

            return response()->json([
                'success' => !$fileExists,
                'message' => $responseMessage
            ], 200);

        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json([
                'success' => false,
                'error' => 'Something went wrong.'
            ], 500);
        }

    }

    // public function moveFile(Request $request)
    // {
    //     $fileId = $request->fileId;
    //     $folderId = $request->folderId;
    //     try {
    //         $file = $this->fileModel::findOrFail($fileId);
    //         $newFolderName = $this->folder::findOrFail($folderId)->folder_name;
    //         $oldFolderName = basename($file->folder->folder_name);

    //         // Update the file's folder in the database
    //         $file->folder_id = $folderId;
    //         $file->save();

    //         // Move the file in storage
    //         $oldFilePath = public_path("storage/{$this->file}{$oldFolderName}/{$file->original_name}");
    //         $newFilePath = public_path("storage/{$this->file}{$newFolderName}/{$file->original_name}");

    //         Storage::copy($oldFilePath, $newFilePath);

    //         return response()->json(['success' => true]);
    //     } catch (\Exception $e) {
    //         return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
    //     }
    // }

    function showNestedFolderImages(Request $request)
    {
        try {
            $folderID = $request->folderId;

            $path = $this->navbarPath($folderID);

            $files = $this->fileModel::inFolder($folderID)->get();
            $childFolders = $this->folder::where('parent_folder_id', $request->folderId)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
            return response()->json(['success' => true, 'message' => 'show child folder with thair child folder and files.', 'html' => $html, 'path' => $path]);

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

    function backButton(Request $request)
    {
        try {
            $folderID = $request->folderId;
            $folderData = $this->folder::findOrFail($folderID);
            $childFolders = $this->folder::where('parent_folder_id', $folderData->parent_folder_id)->get();

            if ($folderData->parent_folder_id != null) {

                $folderPath = [];
                while ($folderData->parent_folder_id !== null) {
                    array_unshift($folderPath, $folderData->folder_name);
                    $folderData = $this->folder::findOrFail($folderData->parent_folder_id);
                }
                array_unshift($folderPath, $folderData->folder_name);
                array_pop($folderPath);
                $folderData = $this->folder::findOrFail($folderID);

                $filePath = implode(' > <i class="ti ti-folder"></i> ', $folderPath);

                $path = '<i class="ti ti-folder"></i> file > <i class="ti ti-folder"></i> ' . $filePath;
                $files = $this->fileModel::inFolder($folderData->parent_folder_id)->get();

                $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);

                return response()->json([
                    'success' => true,
                    'message' => 'show child folder with thair child folder and files.',
                    'html' => $html,
                    'path' => $path,
                    'parentFolderId' => $folderData->parent_folder_id
                ]);
            }

        } catch (\Exception $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 500);
        }
    }

    public function deleteFolder(Request $request)
    {
        try {
            $folderDetails = $this->fileModel::findOrFail($request->folderId);

            $this->deleteImage($this->file . $folderDetails->folder_name . '/', basename($folderDetails->original_name));

            $folderDetails->delete();
            dd('done');

            $files = $this->fileModel::inFolder($request->folderId)->get();
            $childFolders = $this->folder::where('parent_folder_id', $request->folderId)->get();

            $html = $this->generateHtmlForLayout($request->layout, $files, $childFolders);
            return response()->json(['success' => true, 'html' => $html]);
        } catch (\Exception $e) {
            logError($e, 500);
            return response()->json(['success' => false, 'error' => 'Something went wrong.'], 500);
        }
    }

    function navbarPath($folderID)
    {
        $folderData = $this->folder::findOrFail($folderID);

        $folderPath = [];
        while ($folderData->parent_folder_id !== null) {

            // Add the current folder name to the beginning of the array
            array_unshift($folderPath, $folderData->folder_name);
            $folderData = $this->folder::findOrFail($folderData->parent_folder_id);
        }

        // Add the root folder name to the beginning of the array
        array_unshift($folderPath, $folderData->folder_name);

        // Implode the folder names with a separator to create the file path
        $filePath = implode(' > <i class="ti ti-folder"></i> ', $folderPath);

        // You can add more formatting or HTML tags as needed
        $path = '<i class="ti ti-folder"></i> file > <i class="ti ti-folder"></i> ' . $filePath;

        return $path;
    }

    private function generateFilePaths($folder, $oldFileName, $newFileName)
    {
        $oldFilePath = public_path("storage/{$this->file}{$folder->folder_name}/{$oldFileName}");
        $newFilePath = public_path("storage/{$this->file}{$folder->folder_name}/{$newFileName}");

        return compact('oldFilePath', 'newFilePath');
    }

    public function generateHtmlForLayout($layout, $files, $childFolders)
    {
        return View::make($layout == 'nowGrid' ? 'partials.files_table' : 'partials.list_view', compact('files', 'childFolders'))->render();
    }
}
