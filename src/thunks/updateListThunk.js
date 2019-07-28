import { fetchData } from '../fetchData';
import {updateList} from '../actions';

export const updateList = list => {
  return async dispatch => {
    try {
      const { title, id } = list;
      const url = 'http://localhost:3001/api/v1/lists/:id';
      const options = {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          id
        })
      }
      const result = await fetchData(url, options)
      dispatch(updateList(result))
    } catch (error) {
      dispatch(hasError(error));
    }
  }
}