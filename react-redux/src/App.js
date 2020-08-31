import React, { Component } from 'react'
import store from './store'
import { add, reduce, addStr } from "./action";
import { connect } from "react-redux";
class App extends Component {
  render() {
    return (
      <div>
        <h1>react-redux</h1>
        <button onClick={() => { store.dispatch(add(5)) }} >add</button>
        <p> count: {store.getState().count} </p>

        <button onClick={this.props.add} >+++++++</button>
        <p> count: {this.props.count} </p>

        <button onClick={this.props.reduce} >------</button>

        <p>str:{this.props.str}</p>
        <button onClick={() => { this.props.addStr('la') }} >lalalala</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    str: state.str
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    reduce: () => dispatch(reduce()),
    addStr: (str) => dispatch(addStr(str)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

