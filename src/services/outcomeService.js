import { AxiosConfig as axios } from "./axiosConfig";

export const OutcomeCreate = async (outcome_category, outcome_comment, outcome_total, user_id) => {
    try {
      const requestBody = new FormData();


      requestBody.append('amount', outcome_total);
      requestBody.append('user_id', user_id);
      requestBody.append('category_id', outcome_category);
  
      const response = await axios.post('/outcomes',{
        amount: outcome_total,
        user_id: user_id,
        category_id: outcome_category
      });
  
      console.log(response);
  
      return response;
    } catch (error) {
      console.error(error);
  
      return error.response;
    }
  };