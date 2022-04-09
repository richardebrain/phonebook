import { contactActionTypes } from "./contact.types";
import { addContactToList ,removeContacts} from "./contacts.utils";
const INITIAL_STATE={
  contacts:[]
};

  const contactReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
      case contactActionTypes.ADD_CONTACTS:
        return{
          ...state,
          contacts:addContactToList(state.contacts,action.payload)
        }
     case contactActionTypes.REMOVE_CONTACTS:
     return{
       ...state,
       contacts:removeContacts(state.contacts,action.payload)
     }
      default:
        return state
       
    }

  }
  export default contactReducer

