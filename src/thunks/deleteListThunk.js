import { fetchData } from '../utils/fetchData';
import { deleteList, hasError } from '../actions';


export const deleteListThunk = id => {
  return async dispatch => {
    try {
      const url = `http://localhost:3002/api/v1/lists/${id}`
      const options = {
        method: 'DELETE'
      }
      await fetchData(url, options)
      dispatch(deleteList(id));
    } catch (error) {
      dispatch(hasError(error))
    }
  }
}