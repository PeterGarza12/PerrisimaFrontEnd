import Swal from "sweetalert2";

export const dataMissing = ({mensaje}) => {
    Swal.fire({
        title: 'Faltan los siguientes datos: ' + mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok'
      });

};