import { CREATE_USER, GET_USER_BY_ID, VALIDATION } from "./action-type";

const initialState = {
  user: {},
  succes: {},
  estadoFormulario:{}
};

const reduce = (state = initialState, action) => {
  console.log("llegue");
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        estadoFormulario: action.payload
      }
    case GET_USER_BY_ID:
      return {
        ...state,
        user: action.payload
      }

    case VALIDATION:
      return {
        ...state,
        succes: action.payload
      }
      default:
      return { ...state };
  }
};

export default reduce;
