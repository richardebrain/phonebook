import { searchfieldTypes } from "./searchField.types";
const INITIAL_STATE={
  searchField: ''
};

const searchFieldReducer =(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case searchfieldTypes.SEARCHFIELD_INPUT:
      return{
         ...state
         searchField:
      }
      
  
    default:
     return state
  }
};