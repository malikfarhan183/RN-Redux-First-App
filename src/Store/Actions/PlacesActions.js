import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from "./ActionTypes"
export const addPlace = (placeName) => {
  console.log("in Action file" , placeName);
  return {
    type : ADD_PLACE,
    payload : placeName
  };
};
export const deletePlace = () => {
  return {
    type : DELETE_PLACE
  };
};
export const selectPlace = (key) => {
  return {
    type : SELECT_PLACE,
    payload : key
  };
};
export const deSelectPlace = () => {
  return {
    type : DESELECT_PLACE
  };
};
