<template>
  <div>
    Two-----{{numTwo}}
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
  width: 100px;
  height: 100px;
  background: #ee0;
}

</style>
