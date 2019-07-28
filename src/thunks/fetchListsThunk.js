import { fetchData } from '../utils/fetchData';

import { hasError, addAllLists } from '../actions';

export const fetchLists = url => {
  return async (dispatch) => {
    try {
      const data = await fetchData(url);
      const lists = data
      dispatch(addAllLists(lists));
      return lists
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}
