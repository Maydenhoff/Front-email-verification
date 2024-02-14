import axios from "axios";
import { CREATE_USER, GET_USER_BY_ID, VALIDATION } from "./action-type";

const endpoint = `http://localhost:8000`;

export const createUser = (user) => {
  try {
    return async (dispatch) => {
      const {data} = await axios.post(`${endpoint}/register`, user);
      return dispatch({
        type:CREATE_USER,
        payload:data
      })
    }
  } catch (error) {
   console.log(error.message); 
  }
}

export const getUserById = (id) => {
  const idNum= parseInt(id)
  return async(dispatch) => {
    const {data} = await axios.get(`${endpoint}/?id=${idNum}`)
    console.log(data, "data");
    return dispatch ({
      type: GET_USER_BY_ID,
      payload: data
    })
    
  }
}

export const validation = (cod, id) => {
  return async(dispatch)=> {
    const {data} = await axios.get(`${endpoint}/activate/?cod=${cod}&id=${id}`)
    return dispatch ({
      type: VALIDATION,
      payload: data
    })
  }  
  
}