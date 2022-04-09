import { toggleActionTypes} from "./toggle-dropdown.types";
const INITIAL_STATE={
  hidden:true
}

const toggleContactReducer = (state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case toggleActionTypes.TOGGLE_CONTACT_DROPDOWN:
      return{
        ...state,
        hidden:!state.hidden
      }
    
  
    default:
     return state
  }
}
export default toggleContactReducer