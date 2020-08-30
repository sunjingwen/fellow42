import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

export default class Nav1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }
  componentDidMount() {
    fetch('/data/navList.json').then(response => {
      return response.json()
    }).then(res => {
      this.setState({
        list: res.data
      })
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    let { path } = this.props.match
    let navList = this.props.list || this.state.list
    return (
      <div>
        <h1>{this.props.title ? this.props.title : '课程导航'}</h1>
        <div>
          {
            navList.map(obj => (
              obj.children ? <Link key={obj.id} style={{ marginRight: '10px' }} to={`${path}/${obj.path}`}>{obj.title}</Link> : <span key={obj.id} style={{ marginRight: '10px' }} >{obj.title}</span>
            ))
          }
        </div>
        <div>
          {
            navList.map(obj => (
              // <Route path={`${path}/${obj.path}`} component={Nav1} />
              // <Route key={obj.id} path={`${path}/${obj.path}`} render={(props) => (               
              //   <Nav1 {...props} title={obj.title} list={obj.children} ></Nav1>
              // )} />
              <Route key={obj.id} path={`${path}/${obj.path}`} render={(props) => {
                return <Nav1 {...props} title={obj.title} list={obj.children} ></Nav1>
              }} />
            ))
          }
        </div>
      </div>
    )
  }
}
