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
    console.log('000', LoadingInstance, options)
    // LoadingInstance.tile = options.title
    LoadingInstance.$mount(oDiv)
    LoadingInstance.title = options.title

  }
}
