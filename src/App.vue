<template>
  <div id="app">
    <One @changeOne="changeNum" />
    <Two :numTwo="num" />
    App----{{num}}----{{$store.state.name}}

    <div>{{format}}</div>
  </div>
</template>
<script>
import One from './components/One'
import Two from './components/Two'

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
    One,
    Two
  }
}
</script>

<style lang="scss">

</style>
