export const getItems = async () => {
  const response = await fetch('http://localhost:3002/api/v1/items');
  if(!response.ok){
    throw new Error('Unable to fetch items');
  }
  return await response.json();
}

export const getLists = async () => {
  const response = await fetch('http://localhost:3002/api/v1/lists');
  if(!response.ok){
    throw new Error('Unable to fetch lists');
  }
  return await response.json();
}

// export const getItem = async (id) => {
//   const response = await fetch(`http://localhost:3002/api/v1/items/${id}`);
//   if(!response.ok){
//     throw new Error('Unable to fetch item');
//   }
//   return await response.json();
// }

// export const getList = async (id) => {
//   const response = await fetch(`http://localhost:3002/api/v1/lists/${id}`);
//   if(!response.ok){
//     throw new Error('Unable to fetch list');
//   }
//   return await response.json();
// }
