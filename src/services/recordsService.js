import { AxiosConfig as axios } from "./AxiosConfig";

export const getRecords = async (id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const url = `/records`;
    const response = await axios.get(url);

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

export const createRecord = async (record) => {
    try {

      if(record.start_date == null || record.end_date == null){
        return "No deje campos vacíos"
      }else{
        const response = await axios.post("/record", record);
        console.log(response);
        console.log("STATUS: " + response.status);
        if (response.status != 200){
            return "Error" + response.status;
        }
  
        return "Creado con éxito";
      }
  
    } catch (err) {
      console.error(err);
      return "Ocurrió un error inesperado";
    }
  };
  
  export default createRecord;