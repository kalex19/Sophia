// import { fetchData } from '../utils/fetchData';
// import { hasError, addAllLists } from '../actions';

// export const fetchLists = () => {
//   const url = 'http://localhost:3002/api/v1/lists'
//   return async (dispatch) => {
//     try {
//       const response = await fetchData(url);
//       const lists = await response.json()
//       console.log(lists)
//       dispatch(addAllLists(lists));
//       return Promise.all(lists);
//     } catch (error) {
//       dispatch(hasError(error))
//     }
//   }
// }

//not currently in use
