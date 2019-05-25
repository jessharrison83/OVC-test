import axios from 'axios';

export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";


export const fetchUsers = () => {
  return dispatch => {
    dispatch({
    type: LOADING
    });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        dispatch({
          type: SUCCESS, 
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        })
      })
  }
}