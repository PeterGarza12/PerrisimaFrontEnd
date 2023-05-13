import { AxiosConfig as axios } from "./AxiosConfig";

export const getNotifs = async () => {

  try {
    const response = await axios.get("/notifications");

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

export const deleteNotif = async (id) => {

  try {
    const url = `/notification/${id}`;
    const response = await axios.delete(url);

    //window.location.reload(false);

  } catch (err) {
    if (!error.response) {
      // network error
      this.errorStatus = 'Error: Network Error';
    } else {
        this.errorStatus = error.response.data.message;
    }
  }
};

export const createNotif = async (notif) => {
    try {
      if(notif.title == "" || notif.text == ""){
        return "No deje campos vacíos"
      }else{
        console.log(JSON.stringify(notif));
        const response = await axios.post("/notification", notif);
        console.log(response);
        console.log("STATUS: " + response.status);
        if (response.status != 200){
            return "Error" + response.status;
        }
  
        return "Creada con éxito";
      }
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };
  
  export default createNotif;