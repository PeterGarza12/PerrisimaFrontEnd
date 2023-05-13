import { AxiosConfig as axios } from "./AxiosConfig";

export const createTag = async (tag) => {
    try {
      console.log(tag);
      const response = await axios.post("/tag", tag);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

  export const getPostTags = async (post_id, tags) => {
    try {
      const response = await axios.post(`/post/${post_id}/tags`, tags);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      return err;
    }
  };