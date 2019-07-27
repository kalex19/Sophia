export const itemReducer = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_ALL_ITEMS': return [...state, payload.items];
    case 'UPDATE_ITEM': let item = state.find(item => item.id === payload.id); item = {...payload.item}
    return state
    case 'DELETE_ITEM': return state.filter(item => item.id !== payload.id);
    default: return state
  }
}