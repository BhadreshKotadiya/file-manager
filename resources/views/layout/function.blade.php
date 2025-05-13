<script>
    // for option values
    function optionValueAjax(url, reqType, dataObj, succFunction) {
        $.ajax({
            url: url,
            type: reqType,
            async: true,
            data: dataObj,
            success: function(response) {
                succFunction(response);
            },
            error: function(xhr, status, error) {
                console.log("Error: " + error);
            }
        });
    }

    // Dynamic ajax function
    function dynamicAjax(fileName, reqType, dataObj, successCallback, additionalParam) {
        $.ajax({
            url: fileName,
            type: reqType,
            async: true,
            data: dataObj,
            success: function(data) {
                if (data.hasOwnProperty('errors')) {
                    setFormErrors(data.errors);
                } else if (data.hasOwnProperty('success')) {
                    toastr.success(data.success);
                    setTimeout(function() {
                        if (successCallback) {
                            successCallback(data, additionalParam);
                        } else {
                            $('.dataTable').DataTable().ajax.reload();
                        }
                    }, 2000);
                } else if (data.hasOwnProperty('error')) {

                    toastr.error(data.error);
                    customErrorMessage.text(data.error);
                    customErrorAlert.removeClass('d-none');
                }

            },
            error: function(xhr, status, error) {
                if (xhr.status === 422) {
                    var response = JSON.parse(xhr.responseText);
                    if (response.hasOwnProperty('errors')) {
                        setFormErrors(response.errors);
                    }
                }
            }
        });
    }

    // Attribute form validion error 
    function setFormErrors(errors) {

        $.each(errors, function(field, messages) {
            var inputField = $('#' + field);
            var errorContainer = inputField.next('.invalid-feedback');

            if (errorContainer.length === 0) {
                errorContainer = inputField.closest('.position-relative').find('.invalid-feedback');
            }

            errorContainer.html(messages.join('<br>'));
            inputField.addClass('is-invalid');
            if (field === 'data_type' || field === 'is_required') {
                if (inputField.data('error-added') !== true) {
                    var select2Container = inputField.closest('.col-md-6').find('.select2-container');
                    var clonedErrorContainer = inputField.closest('.col-md-6').find('.invalid-feedback')
                        .clone();
                    clonedErrorContainer.insertAfter(select2Container);
                    clonedErrorContainer.html(messages.join('<br>'));
                    inputField.data('error-added', true);
                }

            }


            if (field.startsWith('option_values')) {
                var sanitizedField = field.replace(/\./g, '_');
                var adminFieldContainer = $('#' + sanitizedField).next('.invalid-feedback');
                adminFieldContainer.html(messages.join('<br>'));
                $('#' + sanitizedField).addClass('is-invalid')
            }

        });
    }

    // toast message notification

    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        onclick: null,
        showDuration: '300',
        hideDuration: '1000',
        timeOut: '5000',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'linear',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
    };

    // drag and drop for attribute set
    (function() {
        var groupAttributes = document.getElementById("groups-attributes");
        var newAttributes = document.getElementById("new-attributes");

        Sortable.create(newAttributes, {
            animation: 150,
            group: {
                name: "taskList",
            },
        });

        Sortable.create(groupAttributes, {
            animation: 150,
            group: "taskList",
        });
    })();


    document.addEventListener('DOMContentLoaded', function() {
        initPasswordToggle();
    });

    function initPasswordToggle() {
        var passwordToggles = document.querySelectorAll(".form-password-toggle i");

        if (passwordToggles) {
            passwordToggles.forEach(function(toggle) {
                toggle.addEventListener('click', function(event) {
                    event.preventDefault();

                    var formToggle = toggle.closest(".form-password-toggle");
                    var eyeIcon = formToggle.querySelector("i");
                    var passwordInput = formToggle.querySelector("input");

                    if (passwordInput.getAttribute("type") === "text") {
                        passwordInput.setAttribute("type", "password");
                        eyeIcon.classList.replace("ti-eye", "ti-eye-off");
                    } else if (passwordInput.getAttribute("type") === "password") {
                        passwordInput.setAttribute("type", "text");
                        eyeIcon.classList.replace("ti-eye-off", "ti-eye");
                    }
                });
            });
        }
    }
    var parentTree = $("#jstree")
    var childTree = $("#jstree-child")
    var deleteAttribute = $("#del-atr-btn")
    // tBelow all for Edit attribiute Set

    function initializeJstree(data) {
        parentTree.jstree({
            core: {
                check_callback: function(operation, node, node_parent, node_position, more) {
                    if (operation === "move_node") {

                        var sourceTreeData = more.origin.settings.core.data;
                        if (sourceTreeData && sourceTreeData.length > 0 && sourceTreeData[0]
                            .id === "jstree-child") {
                            if (node.type === "parent" && node_parent.type === "parent") {
                                return false;
                            }
                        }
                        if (node.type === "parent" && node_parent.id !== "#" && node_parent
                            .type === "parent") {
                            return false;
                        }
                        return node_parent.type === "parent";
                    }
                    if (node.id === "empty_1") {
                        return false;
                    }
                    if (operation === "copy_node") {
                        var check = childTree.jstree(true).get_json('#', {
                            flat: true
                        });

                        if (check.length === 1) {
                            childTree.jstree(true).create_node('#', {
                                id: 'empty_1',
                                text: "Empty Node",
                                icon: 'ti ti-file-search',
                                type: 'child',
                            }, 'last');
                        }
                        var copiedNode = {
                            id: node.id,
                            text: node.text,
                            type: node.type,
                        };

                        parentTree.jstree("create_node", node_parent, copiedNode, 'last',
                            function() {
                                childTree.jstree("delete_node", node);
                            });

                        return false;
                    }
                    return true;
                },

                data: data,
            },
            plugins: ["dnd", "types"],
            types: {
                parent: {
                    icon: "ti ti-folder"
                },
                child: {
                    icon: "ti ti-file-text"
                },
            },
        });
    }

    function initializeChildTree() {
        childTree.jstree({
            core: {
                check_callback: function(operation, node, node_parent, node_position, more) {
                    if (operation === "copy_node") {
                        var copiedNode = {
                            id: node.id,
                            text: node.text,
                            type: node.type,
                        };
                        if (node.type === "parent") {
                            return false;
                        }
                        childTree.jstree("create_node", node_parent, copiedNode, 'last',
                            function() {
                                parentTree.jstree("delete_node", node);
                            });

                        var emptyNode = childTree.jstree(true).get_node('empty_1');
                        if (emptyNode) {
                            childTree.jstree(true).delete_node(emptyNode.id);
                        }
                        return false;
                    }
                    return true;
                },
            },
            plugins: ["dnd", "types"],
            types: {
                child: {
                    icon: "ti ti-file-text",
                    valid_children: ["parent"]
                },
            },
        });
    }

    function deleteSelectedNode() {
        var selectedNode = parentTree.jstree('get_selected', true)[0];

        if (selectedNode && selectedNode.type === 'parent') {
            var nodeId = selectedNode.id;
            var jstreeInstance = $('#' + nodeId).jstree(true);
            var parentNode = selectedNode.parent;
            var childNodes = selectedNode.children || [];

            // Move all child nodes to childTree
            childNodes.forEach(function(childNodeId) {
                var childNode = jstreeInstance.get_node(childNodeId);
                var newNode = {
                    id: 'child_' + childNodeId.replace('child_', ''),
                    text: childNode.text,
                    icon: 'ti ti-file-text',
                    type: 'child',
                };
                childTree.jstree(true).create_node('#', newNode, 'last');
            });

            // Delete the selected parent node from the parentTree
            jstreeInstance.delete_node(nodeId);

            // Delete parent node if it has no more children
            if (parentNode && jstreeInstance.get_node(parentNode).children.length === 0) {
                jstreeInstance.delete_node(parentNode);
            }

            var emptyNode = childTree.jstree(true).get_node('empty_1');
            if (emptyNode) {
                childTree.jstree(true).delete_node(emptyNode.id);
            }
            childTreeNoFound.html('');
        }
    }

    // Unasign Attribute shows - Edit file
    function initializeChildTreeWithData(attributes) {
        initializeChildTree();
        if (attributes.length === 0) {
            childTree.jstree(true).create_node('#', {
                id: 'empty_1',
                text: "Empty Node",
                icon: 'ti ti-file-search',
                type: 'child',
            }, 'last');
        } else {
            childTree.jstree(true).settings.core.data = attributes.map(function(attribute) {
                return {
                    'id': 'child_' + attribute.id,
                    'text': attribute.name,
                    'icon': 'ti ti-file-text',
                    'type': 'child',
                };
            });
            childTree.jstree(true).refresh();
        }
    }
</script>
