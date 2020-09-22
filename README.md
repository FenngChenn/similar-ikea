# similar-ikea

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### person-note
* 子路由内容的显示是先通过父路由组件先渲染出来，然后才能显示出子路由组件的内容，所以在父组件中要写router-view标签
* 学会使用新版插槽写法：v-slot，注意紧跟其后的冒号还有插槽名称中间都不能有空格
* element-ui的Carousel插件，为了实现自适应布局，重新计算bannerHeight，使得图片可以变换尺寸，具体可看Carousel.vue文件
* 路由跳转，需要打开新的标签页，不需要特殊css的时候，可以直接使用router-link中的target标签
  ```
  <router-link target="_blank" :to="{path:'/home',query:{id:'1'}}">新页面打开home页</router-link>
  ```
  第二种方式就是编程式导航，在要跳转的方法中加上下面代码
  ```
  let desUrl = this.$router.resolve({
    path: '/customerService/' + id,
  })
  window.open(desUrl.href, '_blank')
  ```
* 
