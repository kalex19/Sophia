export const addAllLists = (lists) => ({
type: "ADD_ALL_LISTS",
payload: {
  lists
}
});

//add list
//add item
//get all lists
//get all items
//get list
//get item


//test & change reducers

export const addALLItems = (items) => ({
type: 'ADD_ALL_ITEMS',
payload: {
  items
}
});

export const updateList = (list) => ({
type: 'UPDATE_LIST',
payload: {
  list
}
});

export const updateItem = (item) => ({
type: 'UPDATE_ITEM',
payload: {
  item
}
});

export const deleteList = (id) => ({
type: 'DELETE_LIST',
payload: {
  id
}
});

export const deleteItem = (id) => ({
  type: 'DELETE_ITEM',
  payload: {
    id
  }
  });

  export const isLoading = (loading) => ({
  type: 'IS_LOADING',
    payload: {
      loading
    }
  });

  export const hasError = (error) => ({
    type: 'HAS_ERROR',
    payload: {
      error
    }
  });