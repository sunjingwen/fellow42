import { combineReducers } from "redux";
const count = (state = 0, action) => {
  console.log(state);
  switch (action.type) {
    case 'COUNT_ADD':
      // return state + 1
      return state + action.num
    case 'COUNT_REDUCE':
      return state - 1
    default:
      return state
  }
}
const str = (state = 'la', action) => {
  switch (action.type) {
    case 'ADD_STR':
      return state + action.str
    default:
      return state
  }
}

const reducer = combineReducers({
  count,
  str
})
export default reducer



