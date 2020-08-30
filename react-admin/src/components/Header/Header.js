import React, { Component } from 'react'
import { Avatar, Badge } from 'antd';
import './Header.css'
export default class CommonHeader extends Component {
  render() {
    return (
      <div className="header-box" >
        <Badge className="user-img" count={1}>
          <Avatar shape="circle" src="http://login.qingmengtech.com/images/5.png" />
        </Badge>
      </div>
    )
  }
}
