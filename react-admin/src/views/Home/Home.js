import React, { Component } from 'react'
import './Home.css'
export default class Home extends Component {
  render() {
    return (
      <div id="home" >
        <h3>hello，可爱的你</h3>
        <h1>欢迎进入青盟课堂的后台管理系统！</h1>
        <div>
          <img src="/images/qing.png" alt="" />
          <img src="/images/meng.png" alt="" />
        </div>
      </div>
    )
  }
}
