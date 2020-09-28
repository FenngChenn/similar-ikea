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
* axios读取本地项目中的json文件数据  
  利用npm安装完axios之后，在main.js中引入，并且可以让它在全局中使用，Vue.prorotype.\$axios = axios，
  在组件中使用：this.$axios.get('')，引号中路径的根路径是根据vue-cli版本不同而不同，3之前是static，从3开始是public文件夹，直接将json文件放在public文件夹下即可获取json数据了
* Vue中带有__ob__: Observer的数组无法遍历
  如果不是push进数组的话，就不会出现__ob__: Observer。这个属性是vue给数据添加的监控器，不能强制删掉，那么就失去使用vue的作用啦...
  可以通过将vm.$data传入JSON.parse(JSON.stringify(...))得到深拷贝的原始数据对象
* element-ui组件中的\<el-autocomplete>标签想要展示的数据可以为后台获取的一组数组，数组中的每一个对象必须有一个键名为value的值，因为autocomplete只识别value字段，并在下拉列表中显示
* 如果一个页面中有多个\<el-autocomplete>组件，那么使用:fetch-suggestions以及@select属性时，js就区分不出来是哪个被触发了，原写法： :fetch-suggestions="querySearchAsync", @select="handleSelect(item, index)";   
  解决：:fetch-suggestions="((queryString, cb) => {queryFun(queryString, cb)})", @select="(item) => {handleSelect(item, index)}"。 实际上运用的是闭包原理!!!!!!
  
* **使用element-ui中的el-autocomplete报错**，报错如下：
在handleChange这个方法中报错，传入的不是event事件，而是输入的字符串。     
在elementui 2.13.2中已修复：  
Autocomplete -> Fix change event bug (#19200 by @sxzz)
