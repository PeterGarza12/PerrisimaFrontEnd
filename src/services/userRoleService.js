import { AxiosConfig as axios } from "./AxiosConfig";

export const getRole = async (id) => {

    try {
      const url = `/userRole/${id}`;
      const response = await axios.get(url);
    //console.log("SERVICE: "+JSON.stringify(response.data))
      return response.data;
    } catch (err) {
      if (!error.response) {
        // network error
        this.errorStatus = 'Error: Network Error';
      } else {
          this.errorStatus = error.response.data.message;
      }
    }
  };