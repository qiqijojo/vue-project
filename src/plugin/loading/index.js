// import Vue from 'Vue'
import Loading from './Loading'

// 原来报错的点在这儿，不能使用引入的Vue，而必须使用参数里的Vue，这才不会报错了。。。
export default {
  install: function (Vue, options) {
    // Vue.component(Loading.name, Loading)
    const LoadingConstructor = Vue.extend(Loading)
    let LoadingInstance = new LoadingConstructor()
    const oDiv = document.createElement('div')
    document.body.append(oDiv)
    LoadingInstance.$mount(oDiv)

    if (options && options.title !== null && options.title !== undefined) {
      LoadingInstance.title = options.title
    }

    // 添加全局方法
    Vue.showLoading = function () {
      LoadingInstance.isShow = true
    }
    Vue.hideLoading = function () {
      LoadingInstance.isShow = false
    }
    // 添加实例方法
    Vue.prototype.$showLoading = function () {
      LoadingInstance.isShow = true
    }
    Vue.prototype.$hideLoading = function () {
      LoadingInstance.isShow = false
    }
  }
}
