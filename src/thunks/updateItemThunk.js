import { fetchData } from '../utils/fetchData';
import {updateItem, hasError} from '../actions';

export const updateItemThunk = item => {
  return async dispatch => {
    try {
      const url = `http://localhost:3002/api/v1/items/${item.id}`;
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
      }
      const result = await fetchData(url, options)
      dispatch(updateItem(result))
    } catch (error) {
      dispatch(hasError(error));
    }
  }
}