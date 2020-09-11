<template>
  <div>
    One----
    <button @click="add">增加</button>
    <button @click="sub">减少</button>
    <!-- <input v-model="count" /> -->
    <input :value="this.$store.state.name" />
    <span>{{count}}</span>
  </div>
</template>
<script>
export default {
  name: 'One',
  data: () => {
    return {
      count: 0
    }
  },
  created () {
    console.log('one', this.$route)
  },
  methods: {
    add () {
      this.$store.commit('mAdd')
      // this.$store.state.name = this.$store.state.name + 1

      // this.count++
      // this.$emit('changeOne', this.count)
    },
    sub () {
      this.$store.commit('mSub')
      // this.$store.state.name = this.$store.state.name - 1

      // this.count--
      // this.$emit('changeOne', this.count)
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background: #eeeeee;
}

</style>
