import React, { Component } from 'react';

class Details extends Component {
  render() {
    let {params} = this.props.match
    console.log(params);
    return (
      <div>
        <h2>课程详情</h2>
        <p>id: {params.id} </p>
      </div>
    );
  }
}

export default Details;