<template>
  <div>
    One----<div>{{$store.state.name}}</div>
    <button @click="add">增加</button>
    <button @click="sub">减少</button>
    <input v-model="count" />
    <input :value="count" />
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
  methods: {
    add () {
      this.count++
      this.$emit('changeOne', this.count)
    },
    sub () {
      this.count--
      this.$emit('changeOne', this.count)
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background: #eeeeee;
}

</style>
