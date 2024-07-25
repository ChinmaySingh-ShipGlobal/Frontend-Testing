import { ADD_COUNTRY, ADD_INPUT_DATA, ADD_SORT_ORDER } from "@/redux/constants";

export const addInputData = (fieldName: string, value: string) => ({
  type: ADD_INPUT_DATA,
  payload: { fieldName, value },
});

export const updateCountry = (country: string) => ({
  type: ADD_COUNTRY,
  payload: country,
});

export const updateSortOrder = (sortOrder: string) => ({
  type: ADD_SORT_ORDER,
  payload: sortOrder,
});
