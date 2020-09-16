// import Vue from 'Vue'
import Loading from './Loading'

// 原来报错的点在这儿，不能使用引入的Vue，而必须使用参数里的Vue，这才不会报错了。。。
export default {
  install: function (Vue) {
    Vue.component(Loading.name, Loading)
  }
}
