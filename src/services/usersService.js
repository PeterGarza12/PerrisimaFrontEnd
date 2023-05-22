import { AxiosConfig as axios } from "./axiosConfig";
import Swal
 from "sweetalert2";

export const getUserByEmail = async (user_email, user_password) => {
  try {
    const requestBody = new FormData();
    requestBody.append('email', user_email);
    requestBody.append('password', user_password);

    const response = await axios.post('/users/login',{
      email: user_email,
      password: user_password
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: 'Algo salió mal',
      text: 'Vuelva a intentarlo más tarde',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return error.response;
  }
};

export const postCreateEmployee = async (user_name,user_lastname,user_email,user_phone,user_username) => {
  try {
    const requestBody = new FormData();
    const user_realName = user_name + " " + user_lastname;
    const user_password = "Con1234$"
    const user_type = 1;

    requestBody.append('name', user_realName);
    requestBody.append('password', user_password);
    requestBody.append('email', user_email);
    requestBody.append('phone_number', user_phone);
    requestBody.append('user_name', user_username);
    requestBody.append('user_type', user_type);

    const response = await axios.post('/users',{
      name: user_realName,
      password: user_password,
      email: user_email,
      phone_number: user_phone,
      user_name: user_username,
      user_type: user_type
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: 'Algo salió mal',
      text: 'Vuelva a intentarlo más tarde',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return error.response;
  }
};

export const editUser = async (user, user_id) => {
  try {

    const route = "/users/".concat(user_id);
    const response = await axios.put(route, user);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: 'Algo salió mal',
      text: 'Vuelva a intentarlo más tarde',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return error.response;
  }
};

// export const createUser = async (user) => {
//   try {
//     console.log(user);
//     const response = await axios.post("/user", user);
//     console.log(response);
//     console.log("STATUS: " + response.status);
//     if (response.status !== 200){
//         return "Error" + response.status;
//     }

//     return "Creado con éxito";

//   } catch (err) {
//     console.error(err);
//     Swal.fire({
//       title: 'Algo salió mal',
//       text: 'Vuelva a intentarlo más tarde',
//       icon: 'error',
//       confirmButtonText: 'Ok'
//     });
//   }
// };
