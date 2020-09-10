<template>
  <div>
    我是子组件Son
    <div>{{name}}</div>
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
  ]
}
</script>
