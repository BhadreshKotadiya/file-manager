<!-- Sidebar -->
<div class="sidebar me-3" id="all-folders">
    <div class="file-section">
        <b id="root">
            <span id="icon"><i class="ti ti-chevron-right"></i></span>
            <span class="folder-icon"><i class="ti ti-folders"></i></span> File
        </b>
    </div>

    {{-- <ul id="folderList" class="folderList">
        @forelse ($folders as $folder)
            <li class="folder-item" folder-id="{{ $folder->id }}" data-folder="{{ $folder->folder_name }}"
                parent_folder_id="{{ $folder->parent_folder_id }}">
                <a href="javascript:void(0)" class="edit-button-sidebar" data-toggle="modal"
                    data-target="#editFolderModal" data-old-name="{{ $folder->folder_name }}">
                    <i class="ti ti-edit"></i>
                </a>
                <span class="folder-icon"><i class="ti ti-folder"></i></span>
                <span class="folder-name">{{ $folder->folder_name }}</span>
            </li>
        @empty
            <li class="folder-item"></li><i class="ti ti-folder"></i> Empty
            </li>
        @endforelse
    </ul> --}}

    <ul id="folderList" class="folderList">
        @forelse ($folders as $folder)
            @include('partials.folder_item', ['folder' => $folder])
        @empty
            <li class="folder-item"></li><i class="ti ti-folder"></i> Empty
            </li>
        @endforelse
    </ul>

</div>
