@extends('app')

@section('title', 'File Manager - Home')

@section('content')
    @include('partials.upload_file_button')
    <div class="layout-wrapper layout-content-navbar  ">
        <div class="layout-container">
            <div class="layout-page">
                <div class="content-wrapper">
                    <div class="container-xxl flex-grow-1 container-p-y">

                        <!-- File manager Modal -->
                        <div class="modal fade" id="pricingModal" tabindex="-1" aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-simple modal-pricing">
                                <div class="modal-content modal-content-height p-2 p-md-5">
                                    <div class="modal-body">
                                        @include('partials.nav')

                                        <div id="message" class="custom-alert custom-alert-success" role="alert">
                                        </div>
                                        <div class="d-flex pricemodel-height">
                                            @include('partials.sidebar')

                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>

                                            <div class="file-manager-container">

                                                <!-- Display existing images table-->
                                                <input type="hidden" id="nowGrid" name="nowGrid">
                                                <div class="image-grid" id="image-grid">
                                                    @include('partials.files_table')
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <!-- Footer -->
                                    <footer class="footer">
                                        <div class="container">
                                            <p>&copy; 2024 File manager</p>
                                        </div>
                                    </footer>
                                    <!-- / Footer -->

                                </div>
                            </div>
                            <!--/ File manager Modal -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal for creating a new folder -->
    @include('partials.creating_new_folder')

    <!-- Modal for Edit exsting folder name -->
    @include('partials.edit_folder_name_model')

    <!-- Modal for Edit exsting file name -->
    @include('partials.edit_file_name_model')

    <!-- Include the file upload and file manager modal partial auto rename, Overwite , set new name-->
    @include('partials.upload_file_manager_modal')

    <!-- Image Preview Modal -->
    @include('partials.image-preview-modal')


    @push('scripts')
        <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        <script>
            $(document).ready(function() {
                var layout = $('#nowGrid').attr('name');

                // $(document).on("change", '#file-upload', function() {
                $('#file-upload').on('change', function() {

                    // Validate file input
                    var fileInput = $("#file-upload");
                    if (fileInput.val() === "") {
                        showMessage("Error: No file selected. Please choose a file before proceeding.", false);
                        return;
                    }

                    var folderID = $('#path').attr('folder-id');
                    var formData = new FormData($("#file-upload-form")[0]);
                    formData.append('folderID', folderID);
                    formData.append('layout', layout);

                    if (folderID === "") {
                        showMessage("Please select a folder before uploading a file.", false);
                        return;
                    }

                    $.ajax({
                        type: "POST",
                        url: "{{ route('store.file') }}",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function(data) {
                            if (data.success) {
                                showMessage(data.message, data.success);
                                $('#image-grid').html(data.html);
                            } else {
                                // Clear and set new values for the input fields
                                $('#changeFileName, #changeFileNameExtension, #folderID').val('');
                                $('#changeFileName').val(data.fileName);
                                $('#changeFileNameExtension').val(data.extension);
                                $('#folderID').val(data.folderID);

                                // Show the modal
                                $('#upload_file_manager_modal').modal('show');
                            }
                        },
                        error: function(xhr, status, error) {
                            if (xhr.status === 422) {
                                var errors = JSON.parse(xhr.responseText).errors;
                                console.log(errors);
                                // Loop through the errors and display them
                                $.each(errors, function(key, value) {
                                    showMessage(value[0], false);
                                });
                            } else {
                                console.log(xhr.responseText);
                                showMessage("Error occurred while processing your request.", false);
                            }
                        }
                    });
                });

                $(document).on("keyup", '#file-filter', function() {
                    var folderID = $('#path').attr('folder-id');
                    $.ajax({
                        url: "{{ route('filter.file') }}",
                        method: "GET",
                        data: {
                            searchFileName: $(this).val(),
                            folderID: folderID,
                            layout: layout,
                        },
                        success: function(results) {
                            $('#image-grid').html(results.html);
                        },
                        error: function(xhr, status, error) {
                            console.error('Error:', error);
                        },
                    });
                });

                //create new folder ajax call
                $(document).on("click", '#createFolderBtn', function() {
                    // Get the folder name input value
                    var folderName = $('#folderName').val();
                    var folderID = $('#path').attr('folder-id') ?? null;


                    // Empty any existing error messages
                    $('#folderNameError').html('');

                    if (folderName.trim() === '') {
                        $('.folderNameError').text('Please enter a folder name.').css('color', 'red');
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: "{{ route('create.new.folder') }}",
                            data: {
                                folder_name: folderName,
                                _token: '{{ csrf_token() }}',
                                folderID: folderID,
                            },
                            success: function(response) {
                                if (response.success) {

                                    // Hide the modal
                                    $('#newFolderModal').modal('hide');

                                    // Append the new folder item to the folder list
                                    // $('#folderList').append(response.view);
                                    $('#folderList').load(location.href + ' #folderList');


                                    // Show the modal
                                    $('#pricingModal').modal('show');

                                    // Clear the folder name input
                                    $('#folderName').val('');

                                    // Show success message
                                    showMessage(response.message, response.success);
                                } else {

                                    // Display error message and update UI accordingly
                                    var iconClass = 'ti ti-x';
                                    var message = '<i class="' + iconClass + '"></i> ' + response
                                        .message;

                                    $('#folderNameError').html(message).removeClass().addClass(
                                        response.success ? 'text-success' : 'text-danger');

                                    // Disable the create button on error
                                    $('#createFolderBtn').prop('disabled', !response.success);
                                }
                            },
                            error: function(xhr, status, error) {
                                if (xhr.status === 422) {
                                    var errors = JSON.parse(xhr.responseText).errors;

                                    // Loop through the errors and display them
                                    $.each(errors, function(key, value) {
                                        showMessage(value[0],
                                            false);
                                    });
                                } else {
                                    showMessage("Error occurred while processing your request.",
                                        false);
                                }
                            }
                        });
                    }
                });

                //click on any folder ajax call
                $(document).on("click", '.folder-item', function(event) {

                    // Prevent event bubbling
                    event.stopPropagation();

                    // Remove active class from all folders
                    $('.folder-item').removeClass('active-folder');

                    var folderId = $(this).attr('folder-id');
                    var folderName = $(this).data('folder');

                    var folderIcon = '<i class="ti ti-folder"></i>';
                    var message = folderIcon + ' file > ' + folderIcon + ' ' + folderName;

                    $('#path').attr('folder-id', folderId).empty().html(message);

                    // Add active class to the clicked folder
                    $(this).addClass('active-folder');

                    $.ajax({
                        type: 'get',
                        url: "{{ route('show.folder.images') }}",
                        data: {
                            folderId: folderId,
                            _token: '{{ csrf_token() }}',
                            layout: layout
                        },
                        success: function(results) {
                            // Clear the content of #image-grid
                            $('#image-grid').empty();

                            // Append the new content
                            $('#image-grid').html(results.html);
                        },
                        error: function(xhr, status, error) {
                            if (xhr.status === 422) {
                                var errors = JSON.parse(xhr.responseText).errors;

                                // Loop through the errors and display them
                                $.each(errors, function(key, value) {
                                    showMessage(value[0],
                                        false);
                                });
                            } else {
                                showMessage("Error occurred while processing your request.",
                                    false);
                            }
                        }
                    });
                });

                //change layout in listview
                $(document).on("click", '#listButton', function() {
                    layout = 'nowList';
                    $('#nowGrid').attr('name', 'nowList');


                    $(this).css('background-color', 'rgb(213 213 213)');
                    $('#gridButton').css('background-color', '');

                    var folderID = $('#path').attr('folder-id');
                    $.ajax({
                        url: "{{ route('layout.list') }}",
                        type: 'GET',
                        data: {
                            folderId: folderID,
                            layout: layout,
                        },
                        success: function(results) {
                            $('#image-grid').html(results.html);
                        },
                    });
                });

                //change layout in gridview
                $(document).on("click", '#gridButton', function() {
                    layout = 'nowGrid';
                    $('#nowGrid').attr('name', 'newGrid');

                    $(this).css('background-color', 'rgb(213 213 213)');
                    $('#listButton').css('background-color', '');

                    var folderID = $('#path').attr('folder-id');
                    $.ajax({
                        url: "{{ route('show.folder.images') }}",
                        type: 'GET',
                        data: {
                            folderId: folderID,
                            layout: layout,
                        },
                        success: function(results) {
                            $('#image-grid').html(results.html);
                        },
                    });
                });

                //sort by ajax call
                $(document).on("click", '.dropdown-item', function() {
                    var selectedValue = $(this).data('value');
                    var folderID = $('#path').attr('folder-id');

                    $('#btnGroupDrop1').text(selectedValue);

                    $.ajax({
                        url: "{{ route('filter.files') }}",
                        method: 'get',
                        data: {
                            selectedValue: selectedValue,
                            folderID: folderID,
                            layout: layout,
                        },
                        success: function(response) {
                            $('#image-grid').html(response.html);
                        },
                        error: function(error) {}
                    });
                });

                //change folder name on submit button ajax call
                $(document).on("click", '#EditFolderNameSubmitButton', function() {
                    var newFolderName = $("#newFolderName").val();
                    var folderId = $("#folderId").val();
                    var oldFolderName = $("#oldFolderName").val();


                    $.ajax({
                        url: "{{ route('rename.folder') }}",
                        method: 'post',
                        data: {
                            newFolderName: newFolderName,
                            folderId: folderId,
                            _token: '{{ csrf_token() }}',
                            layout: layout
                        },
                        success: function(response) {
                            // Close the modal
                            $(".folder-item[folder-id='" + folderId + "'] .folder-name").text(
                                newFolderName);

                            var folderIcon = '<i class="ti ti-folder"></i>';
                            var message = folderIcon + ' file > ' + folderIcon + ' ' +
                                newFolderName;

                            $('#path').attr('folder-id', folderId).empty().html(message);

                            $("#editFolderModal").modal("hide");

                        },
                        error: function(error) {}
                    });
                });


                $(document).on("click", '#EditFileNameSubmitButton', function() {
                    var newFileName = $("#newFileName").val();
                    var fileId = $("#fileId").val();
                    $.ajax({
                        url: "{{ route('rename.file') }}",
                        method: 'post',
                        data: {
                            newFileName: newFileName,
                            fileId: fileId,
                            _token: '{{ csrf_token() }}',
                            layout: layout
                        },
                        success: function(response) {
                            // Close the modal
                            $('#image-grid').html(response.html);
                            $("#editFileModal").modal("hide");
                        },
                        error: function(error) {}
                    });
                });

                // Attach the event handler for file name validation on keyup
                $(document).on("keyup", '#newFileName', function() {
                    var newFileName = $(this).val().trim();
                    var fileExtension = $('#fileExtension').val();
                    var errorElement = $('#fileNameError');
                    var createButton = $('#EditFileNameSubmitButton');

                    checkFileAvailability(newFileName, fileExtension, errorElement, createButton);
                });

                $(document).on("keyup", '#changeFileName', function() {
                    var newFileName = $(this).val().trim();
                    var fileExtension = $('#changeFileNameExtension').val();
                    var errorElement = $('#changeFileNameError');
                    var createButton = $('#uploadFileManager');

                    checkFileAvailability(newFileName, fileExtension, errorElement, createButton);
                });

                $(document).on("click", '#uploadFileManager', function() {
                    var changeFileName = $("#changeFileName").val();
                    var fileExtension = $("#changeFileNameExtension").val();
                    var radioValue = $('input[name="btnradio"]:checked').val();
                    var folderID = $("#folderID").val();

                    var formData = new FormData($("#file-upload-form")[0]);
                    formData.append('changeFileName', changeFileName);
                    formData.append('fileExtension', fileExtension);
                    formData.append('radioValue', radioValue);
                    formData.append('folderID', folderID);
                    formData.append('layout', layout);



                    $.ajax({
                        type: 'POST',
                        url: "{{ route('manage.file.upload') }}",
                        data: formData,
                        contentType: false,
                        processData: false,
                        success: function(results) {
                            $('#upload_file_manager_modal').modal('hide');
                            $('#image-grid').html(results.html);
                        },
                        error: function(xhr, status, error) {
                            alert('Error deleting file: ' + error);
                        }
                    });
                });

                //show nestered folder images on double click
                $(document).on("dblclick", '.grid-folder-container, .list-folder-container', function() {
                    var folderId = $(this).data('folder-id');

                    $.ajax({
                        type: 'POST',
                        url: "{{ route('show.nested.folder.images') }}",
                        data: {
                            folderId: folderId,
                            layout: layout,
                            _token: '{{ csrf_token() }}',
                        },
                        success: function(response) {
                            $('#path').attr('folder-id', folderId).html(response.path);
                            $('#image-grid').html(response.html);
                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });
                });

                $(document).on("click", '#up-folder-button', function() {
                    var folderID = $('#path').attr('folder-id');
                    $.ajax({
                        type: 'POST',
                        url: "{{ route('back.button') }}",
                        data: {
                            folderId: folderID,
                            layout: layout,
                            _token: '{{ csrf_token() }}'
                        },
                        success: function(response) {
                            console.log(response);
                            $('#path').attr('folder-id', response.parentFolderId).html(response
                                .path);
                            $('#image-grid').html(response.html);
                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });
                });

                $('.edit-button').click(function() {
                    // Handle edit button click
                    var folderId = $(this).closest('.list-folder-container').data('folder-id');
                    // Implement your edit logic here
                });

                $('.delete-button').click(function() {
                    // Handle delete button click
                    var folderId = $(this).closest('.list-folder-container').data('folder-id');
                    // Implement your delete logic here
                });

            });

            function showMessage(message, isSuccess) {
                var messageElement = document.getElementById("message");

                if (messageElement) {
                    messageElement.innerHTML = message;

                    // Apply appropriate CSS class based on isSuccess
                    if (isSuccess) {
                        messageElement.classList.remove("custom-alert-error");
                        messageElement.classList.add("custom-alert-success");
                    } else {
                        messageElement.classList.remove("custom-alert-success");
                        messageElement.classList.add("custom-alert-error");
                    }

                    // Display the message container
                    messageElement.style.display = "block";

                    // Set a timeout to hide the message after 3 seconds
                    setTimeout(function() {
                        messageElement.innerHTML = '';
                        messageElement.style.display = "none";
                    }, 3000);
                }
            }

            function deleteFile(button) {
                var fileId = button.getAttribute('data-file-id');
                var layout = $('#nowGrid').attr('name');

                if (confirm('Are you sure you want to delete this file?')) {

                    // Make an Ajax call to delete the file
                    $.ajax({
                        type: 'POST',
                        url: "{{ route('delete.file') }}",
                        data: {
                            fileId: fileId,
                            layout: layout,
                            _token: '{{ csrf_token() }}',
                        },
                        success: function(results) {
                            console.log(layout);
                            alert('File deleted successfully!');
                            $('#image-grid').html(results.html);
                        },
                        error: function(xhr, status, error) {
                            alert('Error deleting file: ' + error);
                        }
                    });
                }
            }

            function deleteFolder(button) {
                var folderId = button.getAttribute('data-folder-id');
                var layout = $('#nowGrid').attr('name');

                if (confirm(
                        'Are you sure you want to delete this folder? Deleting this folder will also delete all files and nested folders within it. This action cannot be undone.'
                    )) {

                    // Make an Ajax call to delete the folder
                    $.ajax({
                        type: 'POST',
                        url: "{{ route('delete.folder') }}",
                        data: {
                            folderId: folderId,
                            layout: layout,
                            _token: '{{ csrf_token() }}',
                        },
                        success: function(results) {
                            console.log(layout);
                            alert('File deleted successfully!');
                            $('#image-grid').html(results.html);
                        },
                        error: function(xhr, status, error) {
                            alert('Error deleting folder: ' + error);
                        }
                    });
                }
            }

            // Function to check folder availability
            function checkFolderAvailability(folderNameInput, errorElement, createButton) {
                var folderName = folderNameInput.val().trim();

                // Check if the folder name is empty
                if (folderName !== '') {
                    $.ajax({
                        type: 'GET',
                        url: "{{ route('check.folder.availability') }}",
                        data: {
                            folder_name: folderName,
                            _token: '{{ csrf_token() }}',
                        },
                        success: function(response) {
                            // Update the availability message with FontAwesome icons and apply styling
                            var iconClass = response.success ? 'ti ti-check ' : 'ti ti-x';
                            var message = '<i class="' + iconClass + '"></i> ' + response.message;

                            errorElement.html(message).removeClass().addClass(response.success ?
                                'text-success' : 'text-danger');

                            createButton.prop('disabled', !response.success);
                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });
                } else {
                    errorElement.text('');
                    createButton.prop('disabled', true);
                }
            }

            function checkFileAvailability(newFileName, fileExtension, errorElement, createButton) {
                var folderID = $('#path').attr('folder-id');

                $.ajax({
                    url: "{{ route('check.file.availability') }}",
                    method: "GET",
                    data: {
                        fileName: newFileName,
                        folderID: folderID,
                        fileExtension: fileExtension,
                    },
                    success: function(response) {
                        // Update the availability message with FontAwesome icons and apply styling
                        var iconClass = response.success ? 'ti ti-check ' : 'ti ti-x';
                        var message = '<i class="' + iconClass + '"></i> ' + response.message;

                        // Replace the existing error message with the new one and apply styling
                        errorElement.html(message).removeClass().addClass(response.success ?
                            'text-success' :
                            'text-danger');

                        // Enable or disable the create button based on availability
                        createButton.prop('disabled', !response.success);
                    },
                    error: function(xhr, status, error) {
                        console.error('Error:', error);
                    },
                });
            }
        </script>
    @endpush
@endsection
