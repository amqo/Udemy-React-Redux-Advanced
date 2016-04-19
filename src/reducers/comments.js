
export default function(state = [], action) {
  if (!action) {
    return state;
  }
  return [...state, action.payload];
}
