<template>
  <div>
    我是子组件Son
    <div>{{parentName}}</div>
    <button @click="sonFunc">我是按钮</button>
    <ChildCom :childName="parentName" @childSay="sonFunc" ref="child" />
  </div>
</template>
<script>
import ChildCom from './Child'

export default {
  name: 'Son',
  components: {
    ChildCom
  },
  data: () => {
    return {
      selfData: '自己的数据'
    }
  },
  props: [
    'parentName'
  ],
  methods: {
    sonFunc () {
      console.log('666', this.$refs.child)
      this.$emit('parentSay')
    }
  }
}
</script>
