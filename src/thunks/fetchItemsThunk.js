import { fetchData } from '../utils/fetchData';

import { hasError, addAllItems } from '../actions';

export const fetchItems = url => {
  return async (dispatch) => {
    try {
      const data = await fetchData(url);
      const items = data
      dispatch(addAllItems(items));
      return items
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}