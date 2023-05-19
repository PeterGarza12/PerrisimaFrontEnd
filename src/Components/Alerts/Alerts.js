import Swal from "sweetalert2";

export const dataMissing = (mensaje) => {
    Swal.fire({
        title: 'Verifique que los siguientes datos sean correctos: ' + mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
};