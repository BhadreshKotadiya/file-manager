@if ($childFolders)
    <div class="">
        <table class="table table-hover" id="listTableNestedFolders">
            @foreach ($childFolders as $folder)
                <tr class="table-hover-tr">
                    <td>
                        <div class="folder-container">
                            @include('partials.icon_folder')
                            <strong class="list-folder-container" data-folder-id="{{ $folder->id }}"
                                data-folder-name="{{ $folder->folder_name }}">
                                {{ basename($folder->folder_name) }}
                                {{-- <div class="folder-buttons">
                                <button class="edit-button">Edit</button>
                                <button class="delete-button">Delete</button>
                            </div> --}}
                            </strong>
                        </div>
                    </td>
                    <td> {{ fileItemCount($folder) }}</td>
                    <td>
                        <div class="table__button-group">
                            {{-- <a href="javascript:void(0)" class="edit-folder-button-list-view custom-styled-link"
                                data-toggle="modal" data-target="#editFolderModal"
                                data-old-name="{{ basename($file->original_name) }}" data-file-id="{{ $file->id }}">
                                <i class="ti ti-edit"></i>
                            </a> --}}

                            <a href="javascript:void(0)" class="custom-styled-link" data-folder-id="{{ $folder->id }}"
                                onclick="deleteFolder(this)"><i class="ti ti-trash"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            @endforeach
        </table>
    </div>
@endif


<div id="list-view">
    <table class="table table-hover">
        <tbody class="table-border-bottom-0">
            @forelse ($files as $file)
                <tr class="table-hover-tr">
                    @if (Str::endsWith($file->original_name, ['.mp4', '.avi', '.mov', 'webm']))
                        <td>
                            @include('partials.icon_video')
                            <strong>
                                {{ basename($file->original_name) }}
                            </strong>
                        </td>
                    @elseif (Str::endsWith($file->original_name, ['.jpg', '.jpeg', '.png', '.gif', '.bmp']))
                        <td>
                            @include('partials.icon_image')
                            <strong>
                                {{ basename($file->original_name) }}
                            </strong>
                        </td>
                    @elseif (Str::endsWith($file->original_name, ['.pdf']))
                        <td>
                            @include('partials.icon_pdf')
                            <strong>
                                {{ basename($file->original_name) }}
                            </strong>
                        </td>
                    @endif
                    <td> {{ $file->getSizeFormattedAttribute() }}</td>
                    <td>
                        <div class="table__button-group">
                            <a href="javascript:void(0)" class="edit-button-list-view custom-styled-link"
                                data-toggle="modal" data-target="#editFileModal"
                                data-old-name="{{ basename($file->original_name) }}"
                                data-file-id="{{ $file->id }}">
                                <i class="ti ti-edit"></i>
                            </a>

                            <!-- Your button with the click event -->
                            @if (Str::endsWith($file->original_name, ['.jpg', '.jpeg', '.png', '.gif', '.bmp']))
                                <a href="javascript:void(0)" class="custom-styled-link" id="open-preview"
                                    data-file="{{ $file->original_name }}">
                                    <i class="ti ti-photo"></i>
                                </a>
                            @else
                                <a href="{{ $file->original_name }}" class="custom-styled-link" target="_blank"
                                    target="_blank"><i class="ti ti-arrow-bear-right"></i>
                                </a>
                            @endif

                            <a href="javascript:void(0)" class="custom-styled-link" data-file-id="{{ $file->id }}"
                                onclick="deleteFile(this)"><i class="ti ti-trash"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            @empty
                {{-- <tr>
                    <td colspan="5" class="no-files-message">
                        <i class="ti ti-square-rounded-x"></i>
                        No files found.
                    </td>
                </tr> --}}
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
        </tbody>
    </table>
</div>
