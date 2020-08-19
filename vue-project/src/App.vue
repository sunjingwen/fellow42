<template>
  <div id="app">
    <!-- <router-view /> -->
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/course">Course</router-link>|
      <router-link :to="{ path:'/user' , query:{ name:'lisi' , id:1001  } }">用户详情页</router-link>|
    </div>
    <!-- 插槽：决定页面渲染到哪个位置 -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
