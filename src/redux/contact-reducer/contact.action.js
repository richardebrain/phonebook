import { contactActionTypes } from "./contact.types";

const addContacts = (contactToAdd) =>({
  type:contactActionTypes.ADD_CONTACTS,
  payload:contactToAdd
})
export default addContacts