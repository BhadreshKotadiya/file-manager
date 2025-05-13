$(document).ready(function () {
    var autoRenameRadio = $("#AutoRename");
    var overwriteRadio = $("#Overwrite");
    var setNewNameRadio = $("#SetNewName");
    var hiddenFieldsContainer = $(".hidden-field");

    $('.filename').each(function () {
        var fullPath = $(this).attr('title');
        var filename = fullPath.split('/').pop();
        $(this).tooltip({
            title: filename,
            placement: 'bottom',
            trigger: 'hover focus',
        });
    });

    // Hide and show the folder on click on File(root)
    $('#root').on('click', function () {
        $('#folderList').toggle(); // Toggle the visibility of the folder list

        // Toggle the chevron icon based on the toggle state
        $('#icon i').toggleClass('ti-chevron-down ti-chevron-right');
    });

    // Update the hover function to set the data-folder-id attribute when hovering
    $(".folder-item").hover(
        function () {
            var folderId = $(this).attr("folder-id");
            $(this).find(".edit-button-sidebar").show();
            $("#editFolderModal").data("folder-id", folderId);
        },

        function () {
            $(this).find(".edit-button-sidebar").hide();
        }
    );


    //open new model on click on edit button
    $(document).on("click", '.edit-button-sidebar', function () {
        var folderItem = $(this).closest(".folder-item");
        var oldFolderName = folderItem.data("folder");
        var folderId = folderItem.attr("folder-id");

        // Empty any existing error messages
        $("#folderEditError").empty();

        $("#newFolderName").val(oldFolderName);
        $("#folderId").val(folderId);
        $("#oldFolderName").val(oldFolderName);
        $("#editFolderModal").modal("show");
    });

    $(document).on("click", '.edit-button-list-view', function () {
        var oldFileName = $(this).data("old-name");
        var fileId = $(this).data("file-id");

        // Split filename and extension
        var fileName = oldFileName.split('.').slice(0, -1).join('.');
        var fileExtension = oldFileName.split('.').pop();

        // Set values in modal
        $("#newFileName").val(fileName);
        $("#fileExtension").val(fileExtension);
        $("#fileId").val(fileId);

        // Show the modal
        $("#editFileModal").modal("show");
    });


    // Attach the event handler for modal close event
    $('#newFolderModal').on('hidden.bs.modal', function () {
        // Empty any existing error messages
        $("#folderNameError").empty();
        $("#newFolderName").val('');
        $('#pricingModal').modal('show');
    });

    //show message like folder existing or not on edit time
    $('#editFolderModal').on('shown.bs.modal', function () {
        var folderNameInput = $(this).find('.folderName');
        var errorElement = folderNameInput.next('#folderEditError');
        var createButton = $(this).find('#EditFolderNameSubmitButton');

        // Attach the event handler for folder name validation on keyup
        folderNameInput.off('keyup').on('keyup', function () {
            checkFolderAvailability(folderNameInput, errorElement, createButton);
        });
    });

    //show message like folder existing or not on create time
    $('#newFolderModal').on('shown.bs.modal', function () {
        var folderNameInput = $(this).find('.folderName');
        var errorElement = folderNameInput.next('#folderNameError');
        var createButton = $(this).find('#createFolderBtn');


        // Attach the event handler for folder name validation on keyup
        folderNameInput.off('keyup').on('keyup', function () {
            checkFolderAvailability(folderNameInput, errorElement, createButton);
        });
    });


    $(document).on("click", '#open-preview', function () {
        // Get the file ID
        var file = $(this).data('file');
        $('#previewImage').attr('src', file);

        // Display the modal
        $('#imagePreviewModal').css('display', 'block');
    });



    function toggleFieldsVisibility() {
        if (setNewNameRadio.prop("checked")) {
            // If "SetNewName" radio button is selected, show the fields
            hiddenFieldsContainer.show();
        } else {
            // If another radio button is selected, hide the fields
            hiddenFieldsContainer.hide();
        }
    }

    // Initial setup
    toggleFieldsVisibility();

    // Add change event listeners to all radio buttons
    autoRenameRadio.on("change", toggleFieldsVisibility);
    overwriteRadio.on("change", toggleFieldsVisibility);
    setNewNameRadio.on("change", toggleFieldsVisibility);


    $('.image-preview-modal-close').on('click', function () {
        $('#imagePreviewModal').css('display', 'none');
        $('#pricingModal').modal('show');

    });




});


document.addEventListener('DOMContentLoaded', function () {
    var filterLabel = document.getElementById('filter-label');
    var filterInputGroup = document.getElementById('filter-input-group');
    var fileFilterInput = document.getElementById('file-filter');

    // Hide the input field on page load
    fileFilterInput.style.display = 'none';

    filterLabel.addEventListener('click', function () {
        // Toggle the visibility of the input field and set its width
        if (fileFilterInput.style.display === 'none' || fileFilterInput.style.display === '') {
            fileFilterInput.style.display = 'block';
            filterInputGroup.style.width = 'auto'; // Set the width based on your requirements
        } else {
            fileFilterInput.style.display = 'none';
            filterInputGroup.style.width = 'initial'; // Reset width to initial state
        }
    });
});
