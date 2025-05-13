<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    use HasFactory;
    protected $fillable = [
        'original_name',
        'size',
        'folder_id'
    ];

    public function getOriginalNameAttribute()
    {
        $folderName = optional($this->folder)->folder_name;
        $OriginalName = $this->attributes['original_name'];
        if ($OriginalName) {
            return asset('storage/file/' . $folderName . '/' . $OriginalName);
        } else {
            return null;
        }
    }

    public function folder()
    {
        return $this->belongsTo(Folder::class);
    }

    public function scopeSearch($query, $searchFileName)
    {
        return $query->where('original_name', 'LIKE', '%' . $searchFileName . '%');
    }

    public function scopeInFolder($query, $folderID)
    {
        return $query->where('folder_id', $folderID);
    }

    public function getSizeFormattedAttribute()
    {
        $sizeInBytes = $this->size;
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        $unitIndex = 0;
        while ($sizeInBytes >= 1024 && $unitIndex < count($units) - 1) {
            $sizeInBytes /= 1024;
            $unitIndex++;
        }

        return round($sizeInBytes, 2) . ' ' . $units[$unitIndex];
    }

}

