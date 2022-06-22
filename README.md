# 基于 Vue 3 + Vite + vue-virtual-scroller 实现无限下拉列表

第一步：yarn add vue-virtual-scroller@next

第二步：在main.js中引入 vue-virtual-scroller(全局引入) 或者在 需要的组件中部分引入

```javascript
// 全局引入
import { createApp } from 'vue'
import App from './App.vue'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

const app = createApp(App)

app.use(VueVirtualScroller)
app.mount('#app')
```
```javascript
// 部分引入
import { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
export default {
  components: {
    RecycleScroller
  }
}
```

