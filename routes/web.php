<?php

use App\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/



Route::get('', [FileController::class, 'showform']);
Route::post('store-file', [FileController::class, 'storeFile'])->name('store.file');
Route::get('/filter-files', [FileController::class, 'filterFilesByName'])->name('filter.file');
Route::get('/show-folder-images', [FileController::class, 'showFolderImages'])->name('show.folder.images');
Route::get('check-folder-availability', [FileController::class, 'checkFolderAvailability'])->name('check.folder.availability');
Route::post('/create/new/folder', [FileController::class, 'createFolder'])->name('create.new.folder');
Route::post('/delete-file', [FileController::class, 'deleteFile'])->name('delete.file');


//layout view change
Route::get('layout/list', [FileController::class, 'layoutList'])->name('layout.list');

//filter by name, size, date , A-Z and Z-A
Route::get('filter/files', [FileController::class, 'filterFiles'])->name('filter.files');

Route::post('/rename-folder', [FileController::class, 'renameFolder'])->name('rename.folder');

Route::post('/rename-file', [FileController::class, 'renameFile'])->name('rename.file');

Route::get('check-file-availability', [FileController::class, 'checkFileAvailability'])->name('check.file.availability');

Route::post('/manage-file-upload', [FileController::class, 'manageFileUpload'])->name('manage.file.upload');

// Route::post('/move-file', [FileController::class, 'moveFile'])->name('move.file');

Route::post('/show/nested/folder/images', [FileController::class, 'showNestedFolderImages'])->name('show.nested.folder.images');

Route::post('back/button', [FileController::class, 'backButton'])->name('back.button');

Route::post('/delete-folder', [FileController::class, 'deleteFolder'])->name('delete.folder');
