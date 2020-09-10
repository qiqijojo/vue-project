<template>
  <div>
    <p>我是App的孙子组件----{{childName}}</p>
    <button @click="childFunc">我是按钮</button>
  </div>
</template>
<script>
export default {
  name: 'Child',
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
