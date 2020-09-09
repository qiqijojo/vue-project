<template>
  <div>
    <p>我是第二个子组件</p>
  </div>
</template>
<script>
export default {
  name: 'Two',
  methods: {
    getName () {
      console.log(this.$store.state.name)
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background: #ee0;
}

</style>
