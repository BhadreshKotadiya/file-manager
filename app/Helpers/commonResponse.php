<?php

use App\Jobs\SendEmailJob;
use App\Mail\MailTemplete;
use App\Models\Folder;
use App\Models\Student;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonPeriod;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;


if (!function_exists('logError')) {
    function logError($th, $abort = null)
    {
        Log::error($th->getMessage(), ['path' => dirname(__FILE__)]);
        if ($abort != null) {
            abort($abort);
        }
    }
}

if (!function_exists('fileItemCount')) {

    function fileItemCount($folder)
    {
        $folderCount = Folder::where('parent_folder_id', $folder->id)->count();
        $fileCount = $folder->files->count();
        return $folderCount + $fileCount . " items";
    }
}

?>
