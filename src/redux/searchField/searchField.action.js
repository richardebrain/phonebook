
import { searchfieldTypes } from "./searchField.types";

const searchFieldAction =(searchInput)=>({
  type:searchfieldTypes.SEARCHFIELD_INPUT,
  payload:searchInput
});
export default searchFieldAction