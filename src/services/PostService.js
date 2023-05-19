import { AxiosConfig as axios } from "./AxiosConfig";

export const getPostsbyuser = async (user_id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/postsbyuser/" + user_id;
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const EditPost = async (idpost, posttext) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/post/" + idpost;
    const response = await axios.put(route, posttext);
    return response.data;
    
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const getallPosts = async (post) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = "/posts";
    const response = await axios.get(route);
    return response.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const createPost = async (post) => {
  try {
    console.log(post);
    const response = await axios.post("/post", post);
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

export const destroypost = async (postId) => {
  if (window.confirm("¿Estás segura que quieres eliminar tu rima?")) {
      //const response = await axios({ url: "/students", method: "get" });
      try {
        const route = "/post/" + postId;
        const response = await axios.delete(route);
        return response.data;
      } catch (err) {
        console.error(err);
        return [];
      }
  }
};

export const getPost = async (post_id) => {
  //const response = await axios({ url: "/students", method: "get" });
  try {
    const route = `/post/${post_id}`;
    const response = await axios.get(route);
    return response;
  } catch (err) {
    console.error(err);
    return [];
  }
};
