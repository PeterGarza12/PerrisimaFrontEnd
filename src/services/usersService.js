import { AxiosConfig as axios } from "./axiosConfig";

export const getUsers = async (page) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/users?page=" + page;
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUser = async (email) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/users/" + email;
    const response = await axios.get(route);
    //console.log("?: "+JSON.stringify(response.data));
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getUsersCount = async (page) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/usersCount";
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createUser = async (user) => {
  try {
    console.log(user);
    const response = await axios.post("/user", user);
    console.log(response);
    console.log("STATUS: " + response.status);
    if (response.status != 200){
        return "Error" + response.status;
    }

    return "Creado con éxito";

  } catch (err) {
    console.error(err);
    return "Ocurrió un error inesperado";
  }
};

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

    return error.response;
  }
};

export const isAdmin = async (user_email) => {
  try {    
    const response = await axios.post("/isUserAdmin", {user_email: user_email});
    if (response.status != 200){
      return false;
    }
    //console.log("is admin? "+JSON.stringify(response.data.indeedAdmin) + user_email);
    return response.data.indeedAdmin;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const changeUserRole = async (user_id, role_id) => {
  try {
    const route = "/user/".concat(user_id);
    const response = await axios.put(route, {role: role_id});
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteUser = async (user_id) => {
  try {
    const route = "/user/".concat(user_id);
    const response = await axios.delete(route);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const editUser = async (user, user_id) => {
  try {

    const route = "/user/".concat(user_id);
    const response = await axios.put(route, user);
    console.log(response);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};
