import { AxiosConfig as axios } from "./axiosConfig";

export const getAll = async () => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/profits";
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getDataByFilters = async (phone, month, year) => {
  try {

    console.log(phone,month,year);

    const requestBody = new FormData();
    requestBody.append('phone', phone);
    requestBody.append('month', month);
    requestBody.append('year', year);

    const response = await axios.post('/profits/search',{
      phone: phone,
      month: month,
      year: year,
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};