import React, { Component } from 'react'
import { Menu } from 'antd';
import menuList from '../../config/menuConfig'
import { createFromIconfontCN } from '@ant-design/icons';
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2035651_euu49k4r2ea.js',
});
export default class Nav extends Component {
  createList = (_list) => {
    return (
      _list.map(obj => (
        obj.children ?
          <SubMenu
            key={obj.key}
            title={
              <span>
                <IconFont type={obj.icon} />
                <span>{obj.title}</span>
                {/* <Link to={obj.path}>{obj.title}</Link> */}
              </span>
            }
          >
            {
              this.createList(obj.children)
            }
          </SubMenu> :
          <Menu.Item key={obj.key} icon={obj.icon ? <IconFont type={obj.icon} /> : ''} >
            <Link to={obj.path}>{obj.title}</Link>
          </Menu.Item>
      )))
  }
  render() {
    return (
      <div>
        <Menu
          mode="inline"
          theme="dark"
        >
          {this.createList(menuList)}
        </Menu>
      </div>
    )
  }
}
