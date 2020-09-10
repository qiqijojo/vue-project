<template>
  <div id="app">
    <button @click="say">我是按钮</button>
    <p>{{name}}</p>

    <router-link to="/one">Go to One</router-link>
    <router-link to="/two">Go to Two</router-link>

    <div>
      <SonCom :parentName='name' @parentSay='say' />
    </div>

    <router-view></router-view>
  </div>
</template>
<script>
import SonCom from './components/Son'

export default {
  name: 'App',
  data: () => {
    return {
      msg: '我是父组件',
      name: 'jojo'
    }
  },
  methods: {
    say (data) {
      console.log('我是App的方法')
    },
    getName () {
      console.log(this.$store.state.name)
    }
  },
  components: {
    SonCom
  }
}
</script>

<style lang="scss">
p {
  background: #f00;
  font-size: 20px;
}
</style>
