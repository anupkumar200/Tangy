﻿window.ShowToastr = (type, message) => {
    if (type == "success") {
        toastr.success(message, "Operation Successful", {timeout:5000})
    }
    if (type == "error") {
        toastr.error(message, "Operation failed", { timeout: 5000 })
    }
}

window.ShowSwal = (type, message) => {
    if (type == "success") {
        Swal.fire(
            'Success Notification',
            message,
            'success'
        );
    }
    if (type == "error") {
        Swal.fire(
            'Failed Notification',
            message,
            'error'
        );
    }
}

function ShowDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('show');
}

function HideDeleteConfirmationModal() {
    $('#deleteConfirmationModal').modal('hide');
}