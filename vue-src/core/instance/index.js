/**
 * instance文件夹内的文件都是往vue实例中添加一些属性方法，用来完善vue实例
 */
import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'
/*Github:https://github.com/answershuto*/
// 这里定义vue的构造函数
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  /*初始化*/
  this._init(options)
}

// 定义Vue.prototype._init
initMixin(Vue)
// 向Vue.prototype 对象添加了$date代理、$props代理、$delete方法、$watch方法
stateMixin(Vue)
// 向Vue.prototype 添加$on、$once、$off、$emit等方法
eventsMixin(Vue)
// 向Vue.prototype添加 _update方法、$forceUpdate方法、$destroy方法
lifecycleMixin(Vue)
// 向Vue.prototype添加 $nextTick、_render方法跟一系列render相关的方法
renderMixin(Vue)

export default Vue
