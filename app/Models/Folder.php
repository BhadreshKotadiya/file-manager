<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Folder extends Model
{
    use HasFactory;
    protected $table = 'folders';
    protected $fillable = [
        'folder_name',
        'parent_folder_id',
    ];

    public function files()
    {
        return $this->hasMany(File::class);
    }

    public function parent()
    {
        return $this->belongsTo(Folder::class, 'parent_folder_id');
    }

    public function children()
    {
        return $this->hasMany(Folder::class, 'parent_folder_id');
    }

}
