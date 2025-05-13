<div class="modal fade" id="upload_file_manager_modal" tabindex="-1" role="dialog"
    aria-labelledby="upload_file_manager_modal_Label" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="upload_file_manager_modal_Label">Upload Files</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <small>Some files already exist on the server.</small>
                <code>Rename or overwrite them.</code>
                <form>
                    <div class="text-light small fw-semibold">Choose an option:</div>
                    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">

                        <input type="radio" class="btn-check" name="btnradio" value="AutoRename" id="AutoRename"
                            checked="" autocomplete="off">
                        <label class="btn btn-outline-primary waves-effect" for="AutoRename">Auto Rename</label>

                        <input type="radio" class="btn-check" name="btnradio" value="Overwrite" id="Overwrite"
                            autocomplete="off">
                        <label class="btn btn-outline-primary waves-effect" for="Overwrite">Overwrite</label>

                        <input type="radio" class="btn-check" name="btnradio" value="SetNewName" id="SetNewName"
                            autocomplete="off">
                        <label class="btn btn-outline-primary waves-effect" for="SetNewName">Set New Name</label>
                    </div>
                    <div class="hidden-field mt-3">
                        <div class="form-group">
                            <label for="changeFileName">New File Name (without extension)</label>
                            <input type="text" class="form-control " id="changeFileName" required>
                            <div id="changeFileNameError"></div>
                        </div>
                        <div class="form-group">
                            <label for="fileExtension">File Extension</label>
                            <input type="text" class="form-control" id="changeFileNameExtension" readonly>
                        </div>
                    </div>
                    <input type="hidden" id="folderID">
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="uploadFileManager">Save changes</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
