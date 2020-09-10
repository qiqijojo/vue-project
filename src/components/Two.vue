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
