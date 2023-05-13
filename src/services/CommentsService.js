import { AxiosConfig as axios } from "./AxiosConfig";

export const createComment = async (comment) => {
    try {
        console.log(comment);
        const response = await axios.post("/comment", comment);
        console.log(response);
        if (response.status != 200){
            return "Error" + response.status;
        }
    
        return response;
  
    } catch (err) {
        console.error(err);
        return err;
    }
  };

export const getAllComments = async (post_id) => {
    try {
        const response = await axios.get(`/post/${post_id}/comments`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
  };

export const deleteComment = async (comment_id) => {
    try {
        const response = await axios.delete(`/comment/${comment_id}`);
        console.log(response);
        if (response.status != 200){
            return "Error" + response.status;
        }
    
        return response;
  
    } catch (err) {
        console.error(err);
        return err;
    }
  };

  export const editComment = async (comment_id, comment) => {
    try {
        const response = await axios.put(`/comment/${comment_id}`, comment);
        console.log(response);
        if (response.status != 200){
            return "Error" + response.status;
        }
    
        return response;
  
    } catch (err) {
        console.error(err);
        return err;
    }
  };