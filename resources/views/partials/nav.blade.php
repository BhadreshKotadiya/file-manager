<!-- Navigation Bar -->
<div class="filter-navbar d-flex align-items-center">
    <div>
        <button type="button" class="btn" id="new-folder-button" data-bs-toggle="modal" data-bs-target="#newFolderModal">
            <i class="tf-icons ti ti-folder-plus ti-xs"></i> New Folder
        </button>
    </div>

    <div class="upload-button mb-4">
        <form id="file-upload-form" enctype="multipart/form-data" method="post">
            @csrf
            <label for="file-upload" class="btn"><i class="tf-icons ti ti-upload ti-xs"></i>Upload</label>
            <input type="file" name="file" id="file-upload">
        </form>
    </div>

    <label for="file-filter" class="btn" id="filter-label">
        <i class="tf-icons ti ti-filter ti-xs" title="Filter by Name"></i>Filter
    </label>
    <div class="input-group me-3" id="filter-input-group">
        <input type="text" class="form-control" id="file-filter" placeholder="Enter file name">
    </div>

    <div class="mt-3 mb-4">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-outline-secondary" id="gridButton">
                <i class="ti ti-layout-grid"></i>
            </button>

            <button type="button" class="btn btn-outline-secondary" id="listButton">
                <i class="ti ti-list-details"></i>
            </button>

            <div class="btn-group" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-outline-secondary dropdown-toggle waves-effect"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort By</button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <a class="dropdown-item" href="javascript:void(0);" data-value="Size">Size</a>
                    <a class="dropdown-item" href="javascript:void(0);" data-value="Date">Date</a>
                    <a class="dropdown-item" href="javascript:void(0);" data-value="A-Z">A-Z</a>
                    <a class="dropdown-item" href="javascript:void(0);" data-value="Z-A">Z-A</a>
                </div>
            </div>
        </div>
    </div>

    {{-- <div class="ms-auto ms-md-3">
        <div id="path" class="folder-path active-folder">
            <span folder-id="" parent_folder_id=""><i class="ti ti-folder"></i> file </span>
        </div>
    </div> --}}
</div>
<!-- / End Navigation Bar -->

<div class="back color-4 mb-3">
    <div class="row columns">
        <div class="menu align-center expanded text-center SMN_effect-14">
            <div class="ms-auto ms-md-3">
                <div class="folder-path active-folder">
                    {{-- <button type="button" class="btn btn-icon btn-outline-dark waves-effect">
                        <i class="ti ti-arrow-narrow-up"></i> </button>
                    <span id="path" folder-id=""><i class="ti ti-folder"></i> file </span> --}}
                    <table>
                        <tr>
                            <td class="align-center" style="border: black solid 1px;">
                                <button type="button" class="btn btn-icon btn-outline-none" id="up-folder-button">
                                    <i class="ti ti-arrow-narrow-up"></i>
                                </button>
                            </td>

                            <td class="align-center" style="border: black solid 1px;">
                                <span id="path" folder-id=""><i class="ti ti-folder"></i> file </span>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
