export const errorReducer = (state='', action) => {
const {type, payload} = action;
switch (type) {
  case 'HAS_ERROR': return payload.error;
  default: return state
}};

 