import { AxiosConfig as axios } from "./AxiosConfig";

export const getForum = async (forum_id) => {
    try {
        const route = `/group/${forum_id}`;
        const response = await axios.get(route);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const getAllForums = async () => {
    try {
        const response = await axios.get(`/groups`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const createForum = async (forum) => {
    try {
      const response = await axios.post("/group", forum);
      console.log(response);
      return response;
    } catch (err) {
      console.error(err);
      return err;
    }
};

export const getAllUserForums = async (user_id) => {
    try {
        const response = await axios.get(`/user/${user_id}/groups`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const getAllUserOwnedForums = async (user_id) => {
    try {
        const response = await axios.get(`/user/${user_id}/owned_groups`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const findUser = async (user_id, group_id) => {
    try {
        const response = await axios.get(`/user/${user_id}/group/${group_id}`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const editForum = async (forum_id, user_id_p) => {
    try {
        const body = {
            user_id: user_id_p
        }
        const response = await axios.put(`/group/${forum_id}/add_user`, body);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};

export const deleteForum = async (forum_id) => {
    try {
        const response = await axios.delete(`/group/${forum_id}`);
        console.log(response);
        return response;
    } catch (err) {
        console.error(err);
        return err;
    }
};
