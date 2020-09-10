<template>
  <div>
    <p>我是App的孙子组件----{{childName}}</p>
    <slot name="one" :slotNames="slotNames">我是默认数据</slot>
    <slot name="two">我是默认数据</slot>
    <button @click="childFunc">我是按钮</button>
  </div>
</template>
<script>
export default {
  name: 'Child',
  data: () => {
    return {
      slotNames: '想实现作用域-slot'
    }
  },
  props: [
    'childName'
  ],
  methods: {
    childFunc () {
      this.$emit('childSay')
    }
  }
}
</script>
<style lang="scss" scoped>
p{
  background: #eeeeee;
}

</style>
