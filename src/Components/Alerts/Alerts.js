import Swal from "sweetalert2";

export const dataMissing = (mensaje) => {
    Swal.fire({
        title: 'Verifique que los siguientes datos sean correctos: ' + mensaje,
        icon: 'warning',
        confirmButtonText: 'Ok'
      });
};

export const successMessage = (mensaje) => {
  Swal.fire({
      title: mensaje,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
};

export const mistakeMessage = () => {
  Swal.fire({
    title: 'Información incorrecta',
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};

export const dataNotFound = () => {
  Swal.fire({
    title: 'No se encontró ningún registro',
    icon: 'error',
    confirmButtonText: 'Ok'
  });
};

export const tryLater = () => {
  Swal.fire({
    title: 'Algo salió mal, vuelva a intentarlo más tarde',
    icon: 'error',
    confirmButtonText: 'Ok'
});
};


