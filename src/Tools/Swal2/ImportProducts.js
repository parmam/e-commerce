import Swal from 'sweetalert2'
import { importProducts } from '../../redux/actions/products' 

const ImportProduct = (formData, fileName, dispatch) => {
    Swal.fire({
      title: `El listado de productos ${fileName} se importara a su inventario`,
      text: ``,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'cancelar',
      confirmButtonText: 'Si, estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(importProducts(formData))
        Swal.fire(
                `la lista${fileName}`,
                'se ha agregado a su inventario',
                'success'
        )
      }
    })
  }

  export default ImportProduct
  