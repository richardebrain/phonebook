import { createSelector } from "reselect";
const selectContacts =state=>state.contacts;

export const selectContactToView =createSelector(
[selectContacts],
contacts=>contacts.contacts
);
