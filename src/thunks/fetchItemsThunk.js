import { fetchData } from '../utils/fetchData';
import { hasError, addAllItems } from '../actions';


export const fetchItems = () => {
  const url = 'http://localhost:3002/api/v1/items'
  return async (dispatch) => {
    try {
      const response = await fetchData(url);
      const items = response.json()
      dispatch(addAllItems(items));
      return await Promise.all(items)
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}

//not currently in use
