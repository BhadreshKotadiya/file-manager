<div class="modal fade modal_fade" id="newFolderModal" tabindex="-1" aria-labelledby="newFolderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="newFolderModalLabel">Create New Folder</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form>
                    @csrf
                    <div class="mb-3">
                        <label for="folderName" class="form-label">Folder Name:</label>
                        <input type="text" class="form-control folderName" id="folderName"
                            placeholder="Enter folder name">
                        <div class="folderNameError" id="folderNameError"></div>
                    </div>
                    <button type="button" class="btn btn-primary" id="createFolderBtn" disabled>Create
                        Folder</button>
                </form>
            </div>
        </div>
    </div>
</div>
