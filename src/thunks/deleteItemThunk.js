import { fetchData } from '../utils/fetchData';
import { deleteItem, hasError } from '../actions';


export const deleteItem = id => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/api/v1/items/${id}`
      dispatch(deleteItem(id));
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id
        })
      }
      await fetchData(url, options)
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}