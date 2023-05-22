import { AxiosConfig as axios } from "./axiosConfig";

export const getClientByPhone = async (phone) => {
  try {
    const route = "/clients/search/" + phone;
    const response = await axios.get(route);

    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const ClientCreate = async (client_name,client_lastname,client_phone) => {
  try {
    const requestBody = new FormData();
    const client_realName = client_name + " " + client_lastname;

    requestBody.append('name', client_realName);
    requestBody.append('phone_number', client_phone);

    const response = await axios.post('/clients',{
      name: client_realName,
      phone_number: client_phone,
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};

export const ClientModify = async (client_id, client_name, client_lastname, client_phone) => {
  try {
    const requestBody = new FormData();
    const client_realName = client_name + " " + client_lastname;

    requestBody.append('name', client_realName);
    requestBody.append('phone_number', client_phone);

    const route = "/clients/" + client_id;

    const response = await axios.put(route,{
      name: client_realName,
      phone_number: client_phone,
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};

export const ClientDelete = async (client_id) => {
  try {
    const route = "/clients/" + client_id;

    const response = await axios.delete(route,{});

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};