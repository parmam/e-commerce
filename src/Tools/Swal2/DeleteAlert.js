import Swal from "sweetalert2"

export const DeleteAlertCategory = (categoryRemover, dispatch) => {
    Swal.fire({
        title: `La categoria ${categoryRemover} se eliminara`,
        text: `si elimina una categoria tambien se eliminara todas las 
        subcategorias relacionadas a estas y se desvincularan de todos los productos`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText:'cancelar',
        confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire(
            `${categoryRemover}`,
            'ha sido eliminada',
            'success'
        )
        }
    })
}

