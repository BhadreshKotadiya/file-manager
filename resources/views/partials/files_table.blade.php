<div class="mb-5">
    <table class="folder-table" id="gridTableNestedFolders">
        <tr>
            @foreach ($childFolders as $folder)
                <td>
                    <div class="grid-folder-container" data-folder-id="{{ $folder->id }}"
                        data-folder-name="{{ $folder->folder_name }}">
                        <img class="folder-container-img" src="{{ asset('default/folder.png') }}" alt="Image">
                    </div>
                    <small class="filename" title="{{ $folder->folder_name }}">
                        {{ $folder->folder_name }}
                    </small>
                </td>
            @endforeach
        </tr>
    </table>
</div>

<table class="image-table" id="gridTable">
    @forelse ($files->chunk(4) as $row)
        <tr>
            @foreach ($row as $file)
                <td style="position: relative;" class="draggable">
                    <div class="image-container">
                        <!-- Your existing code for displaying images -->
                        @if (Str::endsWith($file->original_name, ['.mp4', '.avi', '.mov', 'webm']))
                            <a href="{{ $file->original_name }}" target="_blank">
                                <img src="{{ asset('default/video_image.jpeg') }}" alt="Video">
                            </a>
                        @elseif (Str::endsWith($file->original_name, ['.jpg', '.jpeg', '.png', '.gif', '.bmp']))
                            <img src="{{ $file->original_name }}" alt="Image">
                        @elseif (Str::endsWith($file->original_name, ['.pdf']))
                            <a href="{{ $file->original_name }}" target="_blank">
                                <img width="100" height="50" src="{{ asset('default/pdf_icon.png') }}"
                                    alt="Image">
                            </a>
                        @endif


                        <!-- Edit button -->
                        <button class="edit-button edit-button-list-view" data-toggle="modal"
                            data-target="#editFileModal" data-old-name="{{ basename($file->original_name) }}"
                            data-file-id="{{ $file->id }}">
                            <i class="ti ti-edit"></i>
                        </button>

                        <!-- Delete button -->
                        <button class="delete-button" data-file-id="{{ $file->id }}" onclick="deleteFile(this)">
                            <i class="ti ti-trash"></i>
                        </button>
                    </div>
                    <br>
                    <small class="filename" title="{{ $file->original_name }}">
                        {{ basename($file->original_name) }}
                    </small>
                    <small>
                        {{ $file->getSizeFormattedAttribute() }}
                    </small>
                </td>
            @endforeach
        </tr>
    @empty
        @if ($childFolders == null && $files == null)
            <!-- Display a message when no files are found -->
            <tr>
                <td colspan="5" class="no-files-message">
                    <i class="ti ti-square-rounded-x"></i>
                    No files found.
                </td>
            </tr>
        @endif
    @endforelse
</table>
