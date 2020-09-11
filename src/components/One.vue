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
  beforeDestroy () {
    // 将最终需要操作数据的方法放在这里进行
    console.log('beforeDestroy', this.count, this.add)
  },
  destroyed () {
    // 在这个方法中不要去操作数据
    console.log('destroyed', this.count, this.add)
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
