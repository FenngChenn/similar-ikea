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

* indexOf 返回字符串第一次出现的位置，没有就返回-1
* click事件优先级高于blur
* flex百分比布局，父：display: flex; 子：flex: 0 0 50% / 0 0 33.3333% / 0 0 25%
* resize，scroll，hover等js事件触发时绑定的方法会被频繁调用，致使页面产生性能问题，所以我们使用函数节流来解这个决问题   
  思路：如果事件一直被触发，也只在一定事件间隔才执行一次    
  ```
  //scroll方法中当间隔时间大于2s，do somthing执行一次 window.addEventListener('scroll',function(){
    var timer ;//使用闭包，缓存变量
    var startTime = new Date();
    return function(){
        var curTime = new Date();
        if(curTime - startTime >= 2000){
            timer = setTimeout(function(){
                console.log('do somthing')
            },500);
            startTime = curTime;
        }
 
    }}());
  ```

  也可以将节流函数封装一下，用es6语法：
  ```

    /**
     * 节流函数
     * @param fn Function 触发事件后需要执行的函数
     * @param delay String  间隔时间 ms
     * */
    delayScrollFunc(fn, delay) {
      const now = new Date().getTime();
      if (now - this.lastScrollCall < delay) return;
      this.lastScrollCall = now;
 
      setTimeout(() => {
        fn();
      }, 60); // 在实际项目中，我发现这里再延迟一点时间执行效果更好（针对监听scroll）
    }
  ```

* elementui中抽屉组件的使用   
  Q：在页面顶部导航栏中使用抽屉组件，并弹出侧边栏菜单，侧边栏在遮罩层底部   
  A：侧边栏的z-index值比遮罩层还大，但是因为抽屉组件被使用的位置可能在层级比较深的组件中，而遮罩层默认是被插入body元素上，所以侧边栏的父元素的z-index值可能要比遮罩层小，所以侧边栏会在遮罩层底部。
  R：给抽屉组件加入modal-append-to-body的属性(**默认是true**)，值为false，遮罩层则和抽屉组件属于同一父元素下；但是此时遮罩层只能遮住当前父元素的面积，并不能把整个页面遮住，此时再给抽屉组件加入append-to-body属性(**默认是false**)，值为true，这样就把抽屉组件和遮罩层一起加入到body元素中

* Q：el的输入框组件中el-autocomplete的输入建议提示框部分，z-index在初始css中被设定了很大值，导致鼠标在往下滚动时，提示框会覆盖其他z-index值小的组件，形成bug
  A：既然不能改变组件本身的z-index值，那么我们可以改变他们最外层父组件的值，这样就解决了bug

* Less 
  &符号有两种意义   
  1. 父选择符
  ```
    .ant-menu {
      background: #fff;
      border-bottom: 0;

      .ant-menu-item {
        color: rgba(0,0,0,0.65);  
        padding-left:16px;
        &:hover {
          color: #235FB8;
        }
      }
      // 父子上下级关系
      .ant-menu-submenu &{  // 相当于.ant-menu-submenu .ant-menu
        border-color: #235FB8;
      }
    }
  ```

  2.且
  ```
    .ant-menu{
      background: #fff; 
      border-bottom:0;
    
      .ant-menu-item{
        color: rgba(0,0,0,0.65);  
        padding-left:16px; 
        padding-right:16px;
      }
    
      &.ant-menu-submenu{ //同级关系
        border-color: #235FB8;
      }
    
    }
  ```