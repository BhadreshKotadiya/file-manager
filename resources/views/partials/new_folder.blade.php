<li class="folder-item" folder-id="{{ $newFolder->id }}" data-folder="{{ $newFolder->folder_name }}">
    <a href="javascript:void(0)" class="edit-button-sidebar" data-toggle="modal" data-target="#editFolderModal" data-old-name="{{ $newFolder->folder_name }}">
        <i class="ti ti-edit"></i>
    </a>
    <span class="folder-icon"><i class="ti ti-folder"></i></span>
    <span class="folder-name">{{ $newFolder->folder_name }}</span>
</li>
