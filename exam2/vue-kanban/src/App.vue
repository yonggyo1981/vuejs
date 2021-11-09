<template>
  <div id="nav">
    <router-link to="/"><i class='xi-home-o'></i></router-link>
    <router-link to="/join"><i :class="{'xi-user-o': $isLogin(), 'xi-user-plus-o': !$isLogin()}"></i></router-link>
    <router-link to="/login">
      <i :class="{ 'xi-log-out' : $isLogin(), 'xi-log-in' : !$isLogin()}"></i>
    </router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
