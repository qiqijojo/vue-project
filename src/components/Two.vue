<template>
  <div>
    Two-----{{numTwo}}
    <router-link to="/two/1/2/twoSub1" tag="button">我是第一个子路由</router-link>
    <router-link to="/two/2/3/twoSub2" tag="button">我是第二个子路由</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Two',
  props: [
    'numTwo'
  ],
  created () {
    console.log('two', this.$route)
  },
  methods: {
    getName () {
      console.log(this.$store.state.name)
    }
  }
}
</script>
<style lang="scss" scoped>
div{
  width: 500px;
  height: 500px;
  background: #ee0;
}

</style>
