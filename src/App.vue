<template>
  <div id="app">
    <!-- <One @changeOne="changeNum" />
    <Two :numTwo="num" />
    App----{{num}}----{{$store.state.name}}

    <div>{{format}}</div>

    <router-link to='/one?name=jojo&age=25' tag='button'>我是One</router-link>
    <router-link to='/two/11111/222222' tag='button'>我是Two</router-link>
    <router-view name='name1' />
    <router-view name='name2' /> -->

    <!-- <input v-model="num1" @keyup="changeNum1" />
    <span> + </span>
    <input v-model="num2" @keyup="changeNum2" />
    <span> = </span>
    <input v-model="sum" disabled /> -->

     <!-- <input v-model="num1" />
    <span> + </span>
    <input v-model="num2" />
    <span> = </span>
    <input v-model="sum" disabled /> -->

    <!-- <router-link to='/one?name=jojo&age=25' tag='button'>我是One</router-link>
    <router-link to='/two/11111/222222' tag='button'>我是Two</router-link> -->

    <!-- <p ref='ppp'>{{myMsg}}</p> -->

    <!-- <button @click="changeMyMsg">修改数据</button>
    <span ref='ppp'>{{myMsg}}</span> -->

    <!-- <button @click="changeShow">点击</button>
    <One v-if="isShow" /> -->

    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div>
      <el-switch
        v-model="switchStatus"
        active-color="#13ce66"
        inactive-color="#ff4949">
      </el-switch>
    </div> -->
    <!-- <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    />
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" /> -->
    <!-- <Loading></Loading> -->

    <button @click="handleShow">显示</button>
    <button @click="handleHide">隐藏</button>
  </div>
</template>
<script>

// import One from './components/One'
// import Two from './components/Two'
// import Loading from './components/Loading'
// import Vue from 'vue'

export default {
  name: 'App',
  // 创建阶段
  beforeCreate () {
    console.log('beforeCreate', this.myMsg, this.changeNum)
  },
  created () {
    console.log('created', this.myMsg, this.changeNum)
  },
  beforeMount () {
    console.log('beforeMount', this.$refs.ppp)
    // console.log('beforeMount', document.querySelector('p').innerHTML, document.querySelector('p').innerText)
  },
  mounted () {
    console.log('mounted', this.$refs.ppp)
  },
  // 运行阶段
  beforeUpdate () {
    // 老师演示是在vue调试工具上修改的数据,
    console.log('beforeUpdate', this.myMsg)
    console.log('beforeUpdate', this.$refs.ppp)
    // console.log('beforeUpdate', document.querySelector('p').innerHTML, document.querySelector('p').innerText)
  },
  updated () {
    console.log('updated', this.myMsg)
    console.log('updated', this.$refs.ppp)
    // console.log('updated', document.querySelector('p').innerHTML, document.querySelector('p').innerText)
  },
  data: () => {
    return {
      num: 0,
      myMsg: 'English',
      num1: 0,
      num2: 0,
      sum: 0,
      isShow: true,
      switchStatus: true
    }
  },
  watch: {
    num1 (newValue, oldValue) {
      console.log(newValue, oldValue)
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    },
    num2 (newValue, oldValue) {
      console.log(newValue, oldValue)
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    },
    '$route.path': (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }
  },
  methods: {
    handleShow () {
      this.$showLoading()
      // Vue.showLoading()
    },
    handleHide () {
      this.$hideLoading()
      // Vue.hideLoading()
    },
    onClickLeft () {
      alert('返回')
    },
    onClickRight () {
      alert('按钮')
    },
    changeShow () {
      this.isShow = !this.isShow
    },
    changeMyMsg () {
      this.myMsg = 'newMsg：blablabla'
    },
    changeNum (data) {
      console.log('00', data)
      this.num = data
    },
    changeNum1 () {
      console.log('111')
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    },
    changeNum2 () {
      this.sum = parseInt(this.num1 || 0) + parseInt(this.num2 || 0)
    }
  },
  computed: {
    format () {
      console.log('computed')
      return this.myMsg + '你在那儿呢!'
    }
  },
  components: {
    // One
    // Two
    // Loading
  }
}
</script>

<style lang="scss">
.my-active {
  background: skyblue;
}
// .router-link-active {
//   background: #f00;
// }

</style>
