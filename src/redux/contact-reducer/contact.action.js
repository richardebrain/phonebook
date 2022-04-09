
import { contactActionTypes } from "./contact.types";

export const addContacts = (contactToAdd) =>({
  type:contactActionTypes.ADD_CONTACTS,
  payload:contactToAdd
})


export const removeContact=contactToRemove=>({
  type:contactActionTypes.REMOVE_CONTACTS,
  payload:contactToRemove
});

