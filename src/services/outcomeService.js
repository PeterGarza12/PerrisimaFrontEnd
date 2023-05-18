import { AxiosConfig as axios } from "./axiosConfig";

export const OutcomeCreate = async (outcome_category, outcome_comment, outcome_total, user_id) => {
    try {
      const requestBody = new FormData();

console.log("comentario: ", outcome_comment);
      requestBody.append('amount', outcome_total);
      requestBody.append('user_id', user_id);
      requestBody.append('category_id', outcome_category);
      requestBody.append('comment', outcome_comment);
  
      const response = await axios.post('/outcomes',{
        amount: outcome_total,
        user_id: user_id,
        category_id: outcome_category,
        comment: outcome_comment
      });
  
      console.log(response);
  
      return response;
    } catch (error) {
      console.error(error);
  
      return error.response;
    }
  };