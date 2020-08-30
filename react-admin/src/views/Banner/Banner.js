import React, { Component } from 'react'
import { Table, Space } from 'antd';
import { Get } from "react-axios";
// import moduleName from 'axios'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    // key: 'id',
  },
  {
    title: '名称',
    dataIndex: 'title',
    // key: 'title',
  },
  {
    title: '状态',
    dataIndex: 'status',
    // key: 'status',
    render: (text) => (
      text ? <span>已上线</span> : <span>已下线</span>
    )
  },
  {
    title: '操作',
    dataIndex: 'action',
    // key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a href={columns} >编辑</a>
        <a href={columns} >上线</a>
        <a href={columns} >下线</a>
        <a href={columns} >删除</a>
      </Space>
    ),
  },
];

export default class Banner extends Component {
  render() {
    return (
      <div>
        <Get url="https:www.qmtech.com/getBannerList">
          {(error, response, isLoading, onReload) => {
            if (error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
            }
            else if (isLoading) {
              return (<div>Loading...</div>)
            }
            else if (response !== null) {
              return (<Table rowKey={(record) => (record.id)} columns={columns} dataSource={response.data.list} />)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>

      </div>
    )
  }
}
