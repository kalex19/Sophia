import { fetchData } from '../utils/fetchData';
import { deleteItem, hasError } from '../actions';


export const deleteItemThunk = id => {
  console.log(id)
  return async dispatch => {
    try {
      const url = `http://localhost:3002/api/v1/items/${id}`
      const options = {
        method: 'DELETE'
      }
      await fetchData(url, options)
      dispatch(deleteItem(id));
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}