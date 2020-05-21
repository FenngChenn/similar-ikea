<!-- 主页中不动地方的导航栏 -->
<template>
  <nav-bar>
    <img class="logo" slot="left" src="@/assets/img/ikea-logo.svg" alt="" @click="toHome">
    <div slot="center">
      <div class="detail-nav">
        <!-- <div class="nav-item" v-for="(item, index) in navContent" :key="index">
          {{item}}
        </div> -->
        <!-- <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item v-for="(item, index) in navContent" :key="index" :index="(index+1).toString()">
            {{item}}
          </el-menu-item>
        </el-menu> -->
        <el-row :class="colSpace">
          <el-col :span="span" v-for="(item, index) in navContent" :key="index">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{item.title}}<i v-show="item.isIcon" class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <!-- v-if="item.drop.length === 0" -->
              <el-dropdown-menu>
                <el-dropdown-item v-for="sonItem in item.drop" :key="sonItem.id" @click.native="toDetail(sonItem.id)">
                  <!-- <router-link to="/tehui">{{sonItem}}</router-link> -->
                  {{sonItem.name}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </div>
    <div slot="right" class="icon-area">
      <div @click="toUser('login')"><img src="@/assets/img/user.svg" alt="" title="我的"></div>
      <div @click="toUser('wish')"><img src="@/assets/img/wish.svg" alt="" title="心愿单"></div>
      <div @click="toUser('shop')"><img src="@/assets/img/shopbag.svg" alt="" title="购物袋"></div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: "HomeNav",
  components: {
    NavBar
  },
  data() {
    return {
      navContent: [
        {
          title: '精选活动',
          drop: [{id: 'tehui', name: '5月特惠 2020.5.1-5.31'}, {id: 'lower', name: '更低价格'}, 
                 {id: 'recommend', name: '好物推荐'}, {id: 'hot', name: '热销排行'}],
          isIcon: true

        }, 
        {
          title: '所有房间',
          drop: ['卧室', '客厅', '厨房', '餐厅', '儿童房', '浴室', '书房和办公室', '门厅', '户外', '阳台'],
          isIcon: true
        }, 
        {
          title: '所有商品',
          drop: ['家具', '床和床垫', '储物和收纳', '婴儿和儿童', '纺织品', '橱柜和家电', '餐具和厨具', '浴室产品', 
                  '灯具照明'],
          isIcon: true
        }, 
        {
          title: '布置灵感',
          drop: ['卧室灵感', '客厅灵感', '厨房灵感', '餐厅灵感', '儿童房灵感', '浴室灵感', '书房和办公室灵感', 
                  '门厅灵感', '户外灵感'],
          isIcon: true
        }, 
        {
          title: '新品推荐',
          drop: ['春季新品', 'wifi音箱', '新品故事', '查看所有新品'],
          isIcon: true
        }, 
        {
          title: '宜家对公业务',
          drop: [],
          isIcon: false
        }
      ],
      activeIndex: '1',
      currentUser: JSON.parse(this.$localStorage.get('currentUser'))
    }
  },
  computed: {
    colSpace() {
      return 'block-col-' + this.navContent.length
    },
    span() {
      return 24/this.navContent.length
    }
  },
  methods: {
    toHome() {
      this.$router.push('/')
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    toDetail(id) {
      this.$router.push('/tehui')
    },
    toUser(arg) {
      console.log('当前用户是：', this.currentUser)
      let redirect = '';
      if(this.currentUser === null || this.currentUser === undefined) {
        redirect = '/login'
      }else{
        const user = this.currentUser
        if(arg === 'login') {
          // redirect = '/user/${user}'
          this.$router.push({name: 'userInfo', params: {name: user.name }})
        }else if(arg === 'wish') {
          redirect = '/user/'+user.name+'/wishlist'
        }else{
          redirect = '/user/'+user.name+'/shopbag'
        }
      }
      this.$router.push({
        path: redirect
      })
    }
  }
}

</script>
<style scoped>
.logo {
  cursor: pointer;
}
.detail-nav {
  display: flex;
  padding-right: 4rem;
}

.detail-nav div {
  flex: 1;
}

.nav-item {
  font-weight: 700;
}

.icon-area {
  display: flex;
  height: 100%;
}

.icon-area div {
  flex: 1;
  cursor: pointer;
  position: relative;
  border-radius: 80%;
}
.icon-area div:hover {
  background-color: #eee;
} 
.icon-area div img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.el-dropdown {
  font-weight: 700;
  cursor: pointer;
}

.el-col:last-child, .el-col:last-child div{
  cursor: default;
  pointer-events: none;
}

@media only screen and (max-width: 1009px) {
  .detail-nav {
    display: none;
  }
}
</style>