<template>
  <div id="app">
    <!-- <One @changeOne="changeNum" />
    <Two :numTwo="num" /> -->
    App----{{num}}----{{$store.state.name}}

    <div>{{format}}</div>

    <router-link to='/one?name=jojo&age=25' tag='button'>我是One</router-link>
    <router-link to='/two/11111/222222' tag='button'>我是Two</router-link>
    <router-view />
  </div>
</template>
<script>

// import One from './components/One'
// import Two from './components/Two'

export default {
  name: 'App',
  data: () => {
    return {
      num: 0,
      myMsg: 'English'
    }
  },
  methods: {
    changeNum (data) {
      console.log('00', data)
      this.num = data
    }
  },
  computed: {
    format () {
      console.log('computed')
      return this.myMsg + '你在那儿呢!'
    }
  },
  components: {
    // One,
    // Two
  }
}
</script>

<style lang="scss">
.my-active {
  background: skyblue;
}
// .router-link-active {
//   background: #f00;
// }

</style>
