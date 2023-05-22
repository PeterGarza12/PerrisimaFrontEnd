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
