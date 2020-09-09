<template>
  <div id="app">
    <p>{{msg}}</p>
    <button @click="say">我是按钮</button>
    <One />
    <button @click="getName">获取共享数据</button>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>
<script>
import One from './components/One'

export default {
  name: 'App',
  data: () => {
    return {
      msg: 'jojo'
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
    One
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
