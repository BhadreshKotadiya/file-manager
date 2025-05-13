<?php

namespace App\Traits;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;
use App\Models\User;

trait ImagesTrait
{
    //single image upload
    public function uploadMedia($media, $deleteOlder = true, $filenameold, $name, $filepath, $fullChangeFileName = null)
    {
        if ($deleteOlder == true) {
            $this->deleteImage($filepath, $filenameold);
        }
        if ($media->isValid()) {
            $FileOriginalName = $fullChangeFileName ?? $media->getClientOriginalName();
            $fileName = time() . '-' . $name . '.' . $media->getClientOriginalExtension();
            $media->storeAs($filepath, $FileOriginalName, 'public');
            return $FileOriginalName;
        }
        return null; // Return null if the upload fails
    }

    public function uploadImages($images, $deleteOlder = true, $filenameold, $name, $filepath)
    {
        $image_Arr = [];

        if ($deleteOlder == true) {
            $this->deleteImage($filepath, $filenameold);
        }

        foreach ($images as $file) {
            $productOriginalName = $file->getClientOriginalName();
            $size = $file->getSize();

            // Generate a unique filename by combining timestamp, a name, and the original file extension
            $extension = $file->getClientOriginalExtension();
            $fileName = time() . '_' . $name . '_' . uniqid() . '.' . $extension;

            $file->storeAs($filepath, $productOriginalName);
            $image_Arr = [
                'productOriginalName' => $productOriginalName,
                'size' => $size,
            ];
        }

        return $image_Arr;
    }

    public function deleteImage($filepath, $image)
    {
        if (Storage::disk('public')->exists($filepath . $image)) {
            Storage::disk('public')->delete($filepath . $image);
        }
        return null;
    }

    public function deleteMultipleImages($images, $path)
    {
        foreach ($images as $image) {
            if (Storage::disk('public')->exists($path . $image)) {
                Storage::disk('public')->delete($path . $image);
            }
        }
    }
}
