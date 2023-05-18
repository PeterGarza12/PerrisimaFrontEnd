import { AxiosConfig as axios } from "./axiosConfig";

export const createIncome = async (amount, category, comment, clientid) => {
  try {

    var user = JSON.parse(window.sessionStorage.getItem("user"));
    var user_id = user.id;

    console.log(amount,category,comment,clientid);

    const requestBody = new FormData();
    requestBody.append('amount', amount);
    requestBody.append('category_id', category);
    requestBody.append('client_id', clientid);
    requestBody.append('user_id', user_id);
    requestBody.append('comment', comment);

    const response = await axios.post('/incomes',{
      amount: amount,
      category_id: category,
      client_id: clientid,
      user_id: user_id,
      comment: comment
    });

    console.log(response);

    return response;
  } catch (error) {
    console.error(error);

    return error.response;
  }
};
// export const getClientByPhone = async (phone) => {
//   try {
//     const route = "/clients/search/" + phone;
//     const response = await axios.get(route);

//     return response;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

// export const getUsers = async (page) => {
//   //const response = await axios({ url: "/students", method: "get" });
//   try {
//     const route = "/users?page=" + page;
//     const response = await axios.get(route);
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };

// export const getUser = async (email) => {
//   //const response = await axios({ url: "/students", method: "get" });
//   try {
//     const route = "/users/" + email;
//     const response = await axios.get(route);
//     //console.log("?: "+JSON.stringify(response.data));
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };

// export const getUsersCount = async (page) => {
//   //const response = await axios({ url: "/students", method: "get" });
//   try {
//     const route = "/usersCount";
//     const response = await axios.get(route);
//     return response.data;
//   } catch (err) {
//     console.error(err);
//     return [];
//   }
// };


// export const getUserByEmail = async (user_email, user_password) => {
//   try {
//     const requestBody = new FormData();
//     requestBody.append('email', user_email);
//     requestBody.append('password', user_password);

//     const response = await axios.post('/users/login',{
//       email: user_email,
//       password: user_password
//     });

//     console.log(response);

//     return response;
//   } catch (error) {
//     console.error(error);

//     return error.response;
//   }
// };

// export const isAdmin = async (user_email) => {
//   try {    
//     const response = await axios.post("/isUserAdmin", {user_email: user_email});
//     if (response.status != 200){
//       return false;
//     }
//     //console.log("is admin? "+JSON.stringify(response.data.indeedAdmin) + user_email);
//     return response.data.indeedAdmin;
//   } catch (err) {
//     console.error(err);
//     return false;
//   }
// };

// export const changeUserRole = async (user_id, role_id) => {
//   try {
//     const route = "/user/".concat(user_id);
//     const response = await axios.put(route, {role: role_id});
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

// export const deleteUser = async (user_id) => {
//   try {
//     const route = "/user/".concat(user_id);
//     const response = await axios.delete(route);
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

// export const editUser = async (user, user_id) => {
//   try {

//     const route = "/user/".concat(user_id);
//     const response = await axios.put(route, user);
//     console.log(response);
//     return response;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

