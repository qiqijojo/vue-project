<template>
  <div id="app">
    <!-- <p>{{msg}}</p>
    <button @click="say">我是按钮</button> -->
    <!-- <One />
    <Two /> -->
    <!-- <button @click="getName">获取共享数据</button> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->

    <router-link to="/one">Go to One</router-link>
    <router-link to="/two">Go to Two</router-link>

    <div>
      <Son :name='name' />
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
// import One from './components/One'
// import Two from './components/Two'
import Son from './components/Son'

export default {
  name: 'App',
  data: () => {
    return {
      msg: '我是父组件',
      name: 'jojo'
    }
  },
  methods: {
    say () {
      console.log('say')
    },
    getName () {
      console.log(this.$store.state.name)
    }
  },
  components: {
    // One,
    // Two
    Son
  }
}
</script>

<style lang="scss">
p {
  background: #f00;
  font-size: 20px;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
