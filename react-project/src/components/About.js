import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom'


class About extends Component {
  go = () => {
    // this.props.history.goBack()
    // this.props.history.push('/')
    // this.props.history.push({
    //   pathname:'/course',
    //   hash:'abcabc'
    // })
    this.props.history.replace('/')
  }
  render() {
    console.log(this.props);
    let { search } = this.props.location
    let params = new URLSearchParams(search)
    // console.log(params.get('id'));
    // console.log(params.get('age'));
    return (
      <div>
        <h1>关于我们</h1>
        {/* <Redirect to="/course" ></Redirect> */}
        <button onClick={this.go}>go</button>
      </div>
    );
  }
}

export default About;