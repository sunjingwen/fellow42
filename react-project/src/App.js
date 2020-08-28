import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom'
// import { Route, Link, Switch } from 'react-router-dom'

import Home from './components/Home'
import Course from './components/Course'
import About from './components/About'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Link to='/'> 首页 </Link> |
      <Link to='/course'> 课程 </Link> |
      {/* <Link to='/about'> 关于我们 </Link> | */}
      <Link to={{
        pathname:'/about',
        search:'id=666&age=88',
        hash:'lalla',
        // 如果用的是HashRouter，页面刷新，参数丢失
        state:{
          name:'lisi',
          age:88
        },
        // 页面刷新，参数丢失
        query:{
          name:'wangwu',
          age:90
        }
      }}> 关于我们 </Link> |


      <Route path='/' exact component={Home} />
      <Route path='/course' component={Course} />
      <Route path='/course/:id' component={Details} />
      <Route path='/about' component={About} />

      {/* 仅会渲染他所包裹的route当中最先匹配到的那个页面，所以一定要注意顺序 */}
      {/* <Switch>
        <Route path='/course' component={Course} />
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch> */}

    </div >
  );
}

export default App;
