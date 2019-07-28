import { fetchData } from '../utils/fetchData';
import { deleteList, hasError } from '../actions';


export const deleteList = id => {
  return async dispatch => {
    try {
      const url = `http://localhost:3001/api/v1/lists/${id}`
      dispatch(deleteList(id));
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