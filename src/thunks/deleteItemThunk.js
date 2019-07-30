import { fetchData } from '../utils/fetchData';
import { deleteItem, hasError } from '../actions';


export const deleteItemThunk = id => {
  return async dispatch => {
    try {
      const url = `http://localhost:3002/api/v1/items/${id}`
      const options = {
        method: 'DELETE'
      }
      await fetch(url, options)
      dispatch(deleteItem(id));
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}