
    <li class="folder-item" folder-id="{{ $folder->id }}" data-folder="{{ $folder->folder_name }}"
        parent_folder_id="{{ $folder->parent_folder_id }}">
        <a href="javascript:void(0)" class="edit-button-sidebar" data-toggle="modal" data-target="#editFolderModal"
            data-old-name="{{ $folder->folder_name }}">
            <i class="ti ti-edit"></i>
        </a>
        <span class="folder-icon"><i class="ti ti-folder"></i></span>
        <span class="folder-name">{{ $folder->folder_name }}</span>

        <!-- Recursively include the same template for child folders -->
        {{-- @if ($folder->children->isNotEmpty())
            <ul>
                @foreach ($folder->children as $childFolder)
                    @include('partials.folder_item', ['folder' => $childFolder])
                @endforeach
            </ul>
        @endif --}}
    </li>

