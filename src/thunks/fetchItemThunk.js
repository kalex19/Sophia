import { fetchData } from '../utils/fetchData';
import { hasError, addItem } from '../actions';

export const addItem = (item) => {
  return async (dispatch) => {
    try {
      const { task } = item
      const url = 'http://localhost:3001/api/v1/items';
      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            task
        })
      };
      const result = await fetchData(url, options);
      dispatch(addItem({...item}))
      return result;
    } catch (error) {
      dispatch(hasError(error))
    }
  }
};

//not currently in use