<template>
  <div>
    我是子组件Son
    <div>{{parentName}}</div>
    <button @click="sonFunc">我是按钮</button>
    <ChildCom :childName="parentName" @childSay="sonFunc" ref="child">

      <!-- <div slot="one">我想多加点内容----1</div>
      <div slot="two">我想多加点内容----2</div>
      <div slot="one">我想多加点内容----1</div>
      <div slot="two">我想多加点内容----2</div> -->

      <!-- <template v-slot:one>
        <div>我想多加点内容----1</div>
      </template>
      <template v-slot:two>
        <div>我想多加点内容----2</div>
      </template> -->

      <template #one>
        <div>我想多加点内容----1</div>
      </template>
      <template #two>
        <div>我想多加点内容----2</div>
      </template>

    </ChildCom>
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
