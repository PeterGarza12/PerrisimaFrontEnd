import { AxiosConfig as axios } from "./AxiosConfig";

export const getallCategories = async (category) => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const route = "/collections";
      const response = await axios.get(route);
      return response.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  export const deleteCategory = async (id) => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const url = `/collection/${id}`;
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

  export const editCategory = async (id, category) => {
    //const response = await axios({ url: "/students", method: "get" });
    try {
      const url = `/collection/${id}`;
      const response = await axios.put(url, category);
  
    } catch (err) {
      if (!error.response) {
        // network error
        this.errorStatus = 'Error: Network Error';
      } else {
          this.errorStatus = error.response.data.message;
      }
    }
  };

  export const createCategoria = async (category) => {
    try {
      console.log(category);
      const response = await axios.category("/collection", category);
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
  
  export default createCategoria;