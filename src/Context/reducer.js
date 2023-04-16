import { setLocalStorage } from "../Utils/LocalStorage";

export const actionTypes = {
  ADD_PEOPLE_DATA: "ADD_PEOPLE_DATA",
  DELETE_PEOPLE_DATA: "DELETE_PEOPLE_DATA",
};
export const initState = {
  peopleData: [],
};

export function reducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_PEOPLE_DATA:
      return {
        ...state,
        peopleData: action.payload.peopleData,
      };
    case actionTypes.DELETE_PEOPLE_DATA: {
      let deletePeopleDataId = action.payload.peopleDataId;
      const deletedPeopleData = state.peopleData.filter((value) => {
        if (value.id !== deletePeopleDataId) {
          return value;
        }
      });
      setLocalStorage("peopleData", deletedPeopleData);
      return {
        ...state,
        peopleData: deletedPeopleData,
      };
    }
    default:
      throw Error(`action type not supported: ${action.type}`);
  }
}
