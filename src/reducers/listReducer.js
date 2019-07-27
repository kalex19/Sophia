export const listReducer = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_ALL_LISTS': return [...state, payload.lists];
    case 'UPDATE_LIST': let list = state.find(list => list.id === payload.id); item = {...payload.list}
    return state
    case 'DELETE_LIST': return state.filter(list => list.id !== payload.id);
    default: return state
  }
}