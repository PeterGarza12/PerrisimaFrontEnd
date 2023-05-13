import { AxiosConfig as axios } from "./AxiosConfig";

export const getThemes = async () => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const response = await axios.get("/themes");

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

export const getTheme = async (id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const url = `/theme/${id}`;
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

export const deleteTheme = async (id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const url = `/theme/${id}`;
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

export const editTheme = async (id, theme) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const url = `/theme/${id}`;
    const response = await axios.put(url, theme);

  } catch (err) {
    if (!error.response) {
      // network error
      this.errorStatus = 'Error: Network Error';
    } else {
        this.errorStatus = error.response.data.message;
    }
  }
};

export const createTheme = async (theme) => {
  try {
    if(theme.name == "" || theme.variation_1 == "" || theme.variation_2 == "" || theme.variation_3 == ""){
      return "No deje campos vacíos"
    }else{
      console.log(theme);
      const response = await axios.post("/theme", theme);
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

export default createTheme;