<template>
  <div>
    我是子组件Son
    <div>{{name}}</div>
    <button @click="sonFunc">我是按钮</button>
  </div>
</template>
<script>
export default {
  name: 'Son',
  data: () => {
    return {
      selfData: '自己的数据'
    }
  },
  props: [
    'name'
  ],
  methods: {
    sonFunc () {
      this.$emit('parentSay', '哈哈！')
    }
  }
}
</script>
