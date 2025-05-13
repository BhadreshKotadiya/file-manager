<div class="modal fade modal_fade" id="editFolderModal" tabindex="-1" role="dialog" aria-labelledby="editFolderModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editFolderModalLabel">Edit Folder Name</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="editFolderForm">
                    <div class="form-group">
                        <label for="newFolderName">New Folder Name</label>
                        <input type="text" class="form-control folderName" id="newFolderName" required>
                        <div class="folderNameError" id="folderEditError"></div>
                        {{-- <div class="errorContainer"></div> --}}
                    </div>
                    <input type="hidden" id="folderId">
                    <input type="hidden" id="oldFolderName">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="EditFolderNameSubmitButton">Save changes</button>
            </div>
        </div>
    </div>
</div>
