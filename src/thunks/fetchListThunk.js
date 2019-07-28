import { fetchData } from '../utils/fetchData';
import { hasError, addList } from '../actions';

export const addList = (list) => {
  return async (dispatch) => {
    try {
      const { title } = list
      const url = 'http://localhost:3001/api/v1/lists';
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title
        })
      };
      const result = await fetchData(url, options);
      dispatch(addList({...list}))
      return result;
    } catch (error) {
      dispatch(hasError(error))
    }
  }
};