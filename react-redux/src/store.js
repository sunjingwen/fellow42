import { createStore } from "redux";
import reducer from './reducer'

let initState = {
  count: 0,
  str:'la'
}
const store = createStore(reducer, initState)
export default store