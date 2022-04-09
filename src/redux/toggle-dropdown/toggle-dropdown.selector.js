import { createSelector } from "reselect";

const selectContactView=state=>state.dropdownVisibility;

export const selectContactVisibility =createSelector(
  [selectContactView],
  (dropdownVisibility) =>dropdownVisibility.hidden
);