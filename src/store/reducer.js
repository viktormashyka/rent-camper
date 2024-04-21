import { campersReducer } from './campersSlice';
import { filterReducer } from './filterSlice';

export const reducer = {
  campers: campersReducer,
  filter: filterReducer,
};
