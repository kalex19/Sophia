import { fetchData } from '../fetchData';
import {updateItem} from '../actions';

export const updateItem = item => {
  return async dispatch => {
    try {
      const { task, id } = item;
      const url = 'http://localhost:3001/api/v1/items/:id';
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          task,
          id
        })
      }
      const result = await fetchData(url, options)
      dispatch(updateItem(result))
    } catch (error) {
      dispatch(hasError(error));
    }
  }
}