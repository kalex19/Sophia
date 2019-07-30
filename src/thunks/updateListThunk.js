import { fetchData } from '../utils/fetchData';
import {updateList, hasError} from '../actions';

export const updateListThunk = list => {
  return async dispatch => {
    try {
      const url = `http://localhost:3002/api/v1/lists/${list.id}`;
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(list)
      }
      const result = await fetchData(url, options)
      dispatch(updateList(result))
    } catch (error) {
      dispatch(hasError(error));
    }
  }
}