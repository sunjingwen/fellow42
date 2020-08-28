import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {}
    }
  }
  static getDerivedStateFromProps(nextProps, nextState) {
    if (nextProps.match.params.id !== this.props.match.params.id || nextState.data.id !== this.state.data.id) {
      let res = {}
      // fetch(`/data/course${this.props.match.params.id}.json`)
      //   .then(response => {
      //     return response.json()
      //   })
      //   .then(res => {
      //     console.log(res);
      //     if (res.errno * 1 === 0) {
      //       res = res.data
      //     } else {
      //       alert(res.errmsg)
      //     }
      //   }).catch(err => {
      //     console.log(err);
      //   })
      return res
    } else {
      return null
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('props',nextProps.match.params.id !== this.props.match.params.id);
    return nextProps.match.params.id !== this.props.match.params.id || nextState.data.id !== this.state.data.id

  }
  componentDidUpdate() {
    // fetch(`/data/course${this.props.match.params.id}.json`)
    //   .then(response => {
    //     return response.json()
    //   })
    //   .then(res => {
    //     console.log(res);
    //     if (res.errno * 1 === 0) {
    //       this.setState({
    //         data: res.data
    //       })
    //     } else {
    //       alert(res.errmsg)
    //     }
    //   }).catch(err => {
    //     console.log(err);
    //   })
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        console.log(res);
        if (res.errno * 1 === 0) {
          this.setState({
            data: res.data
          })
        } else {
          alert(res.errmsg)
        }
      }).catch(err => {
        console.log(err);
      })
  }

  render() {
    // let {params} = this.props.match
    // console.log(params);
    console.log('render');
    let { data } = this.state
    return (
      <div>
        <h2>课程详情</h2>
        <p>课程ID： {data.id} </p>
        <p>课程名称： {data.title} </p>
        <p>授课教师： {data.teacher} </p>
        <p>课程简介： {data.intro} </p>
      </div>
    );
  }
}

export default Details;