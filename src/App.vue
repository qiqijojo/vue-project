<template>
  <div id="app">
    <One @changeOne="changeNum" />
    <Two :numTwo="num" />
    App----{{num}}
  </div>
</template>
<script>
import One from './components/One'
import Two from './components/Two'

export default {
  name: 'App',
  data: () => {
    return {
      num: 0
    }
  },
  methods: {
    changeNum (data) {
      console.log('00', data)
      this.num = data
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
