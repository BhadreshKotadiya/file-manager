<div class="modal fade modal_fade" id="editFileModal" tabindex="-1" role="dialog" aria-labelledby="editFileModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="editFileModalLabel">Edit File Name</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="editFileForm">
                    <div class="form-group">
                        <label for="newFileName">New File Name (without extension)</label>
                        <input type="text" class="form-control" id="newFileName" required>
                        <div class="fileNameError" id="fileNameError"></div>
                        <div class="errorContainer"></div>
                    </div>
                    <div class="form-group">
                        <label for="fileExtension">File Extension</label>
                        <input type="text" class="form-control" id="fileExtension" readonly>
                    </div>
                    <input type="hidden" id="fileId">
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" id="EditFileNameSubmitButton">Save changes</button>
            </div>
        </div>
    </div>
</div>
