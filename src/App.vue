<template>
  <div id="app">
    <!-- <One @changeOne="changeNum" />
    <Two :numTwo="num" />
    App----{{num}}----{{$store.state.name}}

    <div>{{format}}</div>

    <router-link to='/one?name=jojo&age=25' tag='button'>我是One</router-link>
    <router-link to='/two/11111/222222' tag='button'>我是Two</router-link>
    <router-view name='name1' />
    <router-view name='name2' /> -->

    <!-- <input v-model="num1" @keyup="changeNum1" />
    <span> + </span>
    <input v-model="num2" @keyup="changeNum2" />
    <span> = </span>
    <input v-model="sum" disabled /> -->

     <input v-model="num1" />
    <span> + </span>
    <input v-model="num2" />
    <span> = </span>
    <input v-model="sum" disabled />
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
      myMsg: 'English',
      num1: 0,
      num2: 0,
      sum: 0
    }
  },
  watch: {
    num1 (newValue, oldValue) {
      console.log(newValue, oldValue)
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    },
    num2 (newValue, oldValue) {
      console.log(newValue, oldValue)
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    }
  },
  methods: {
    changeNum (data) {
      console.log('00', data)
      this.num = data
    },
    changeNum1 () {
      console.log('111')
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    },
    changeNum2 () {
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
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
