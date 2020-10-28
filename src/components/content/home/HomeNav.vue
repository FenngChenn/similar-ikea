<!-- 主页中不动地方的导航栏 -->
<!-- :modal-append-to-body="true" -->
<template>
  <div id="homenav">
    <tool-bar>
      <template v-slot:delivery>
        <img src="@/assets/img/whitecar.svg" alt />
        <span @click="jumpToService('delivery')">送货服务</span>
        <!-- <router-link :to="{name: 'delivery'}">送货服务</router-link> -->
      </template>
      <template v-slot:assemble>
        <img src="@/assets/img/worker.svg" alt />
        <span @click="jumpToService('assemble')">组装服务</span>
      </template>
      <template v-slot:return>
        <img src="@/assets/img/exchange.svg" alt />
        <span @click="jumpToService('return')">退换货政策</span>
      </template>
    </tool-bar>
    <nav-bar>
      <div slot="left" class="logo-area">
        <!-- 侧边抽屉代码start -->
        <el-drawer
          :with-header="false"
          :visible.sync="drawer"
          :direction="direction"
          :modal-append-to-body="false"
          :append-to-body="true"
        >
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item
              class="collapse"
              v-for="item in collapseMessage"
              :key="item.id"
              :title="item.name"
            >
              <collapse-info
                v-for="(itemson, key) in item.son"
                :key="key"
                @itemClick="handleItemClick(itemson.num)"
              >
                <template v-slot:content>
                  <span>{{ itemson.title }}</span>
                </template>
              </collapse-info>
            </el-collapse-item>
          </el-collapse>
        </el-drawer>
        <!-- 侧边抽屉代码end -->
        <div class="menu" @click="drawer = true" title="菜单">
          <img src="@/assets/img/menu.svg" alt />
        </div>
        <div class="logo" @click="toHome">
          <img src="@/assets/img/ikea-logo.svg" alt />
        </div>
      </div>
      <div slot="center">
        <div class="detail-nav">
          <!-- <div class="nav-item" v-for="(item, index) in navContent" :key="index">
            {{item}}
          </div>-->
          <!-- <el-menu class="el-menu-demo" mode="horizontal" :default-active="activeIndex" @select="handleSelect">
            <el-menu-item v-for="(item, index) in navContent" :key="index" :index="(index+1).toString()">
              {{item}}
            </el-menu-item>
          </el-menu>-->
          <el-row :class="colSpace">
            <el-col :span="span" v-for="(item, index) in navContent" :key="index">
              <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                  {{ item.title }}
                  <i v-show="item.isIcon" class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <!-- v-if="item.drop.length === 0" -->
                <el-dropdown-menu>
                  <el-dropdown-item
                    v-for="sonItem in item.drop"
                    :key="sonItem.id"
                    @click.native="toDetail(sonItem.id)"
                  >
                    <!-- <router-link to="/tehui">{{sonItem}}</router-link> -->
                    {{ sonItem.name }}
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
      </div>
      <div slot="right" class="icon-area">
        <div @click="toUser('user')">
          <img src="@/assets/img/user.svg" alt title="我的" />
        </div>
        <div @click="toUser('wish')">
          <img src="@/assets/img/wish.svg" alt title="心愿单" />
        </div>
        <div @click="toUser('shop')">
          <img src="@/assets/img/shopbag.svg" alt title="购物袋" />
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  // import NavBar from '@/components/common/navbar/NavBar'
  // 组件懒加载
  const NavBar = () => import('@/components/common/navbar/NavBar')
  const HomeCollapseInfo = () => import('@/components/content/home/HomeCollapseInfo')

  const Toolbar = () => import('@/components/common/toolbar/Toolbar')

  export default {
    name: 'HomeNav',
    components: {
      'nav-bar': NavBar,
      'collapse-info': HomeCollapseInfo,
      'tool-bar': Toolbar,
    },
    data() {
      return {
        navContent: [
          {
            title: '精选活动',
            drop: [
              { id: 'tehui', name: '5月特惠 2020.5.1-5.31' },
              { id: 'lower', name: '更低价格' },
              { id: 'recommend', name: '好物推荐' },
              { id: 'hot', name: '热销排行' },
            ],
            isIcon: true,
          },
          {
            title: '所有房间',
            drop: [
              '卧室',
              '客厅',
              '厨房',
              '餐厅',
              '儿童房',
              '浴室',
              '书房和办公室',
              '门厅',
              '户外',
              '阳台',
            ],
            isIcon: true,
          },
          {
            title: '所有商品',
            drop: [
              '家具',
              '床和床垫',
              '储物和收纳',
              '婴儿和儿童',
              '纺织品',
              '橱柜和家电',
              '餐具和厨具',
              '浴室产品',
              '灯具照明',
            ],
            isIcon: true,
          },
          {
            title: '布置灵感',
            drop: [
              '卧室灵感',
              '客厅灵感',
              '厨房灵感',
              '餐厅灵感',
              '儿童房灵感',
              '浴室灵感',
              '书房和办公室灵感',
              '门厅灵感',
              '户外灵感',
            ],
            isIcon: true,
          },
          {
            title: '新品推荐',
            drop: ['春季新品', 'wifi音箱', '新品故事', '查看所有新品'],
            isIcon: true,
          },
          {
            title: '宜家对公业务',
            drop: [],
            isIcon: false,
          },
        ],
        activeIndex: '1',
        // currentUser: JSON.parse(this.$localStorage.get('currentUser')),
        currentUser: this.$store.state.currentUser,
        drawer: false,
        direction: 'ltr',
        activeName: '1',
        collapseMessage: [
          {
            id: 1,
            name: '活动',
            son: [
              { num: 0, title: '9月特惠' },
              { num: 1, title: '每月会员特惠' },
              { num: 2, title: '更低价格' },
              { num: 3, title: '优选低价产品' },
            ],
          },
          {
            id: 2,
            name: '房间',
            son: [
              { num: 0, title: '卧室' },
              { num: 1, title: '客厅' },
              { num: 2, title: '厨房' },
              { num: 3, title: '餐厅' },
              { num: 4, title: '儿童房' },
              { num: 5, title: '浴室' },
              { num: 6, title: '书房和办公室' },
              { num: 7, title: '门厅' },
              { num: 8, title: '户外' },
              { num: 9, title: '阳台' },
            ],
          },
        ],
      }
    },
    computed: {
      colSpace() {
        return 'block-col-' + this.navContent.length
      },
      span() {
        return 24 / this.navContent.length
      },
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
        // console.log('当前用户是：', this.currentUser)
        let redirect = ''
        if (this.currentUser === null || this.currentUser === undefined) {
          redirect = '/login'
        } else {
          const user = this.currentUser
          if (arg === 'user') {
            // redirect = '/user/${user}'
            // console.log(this.$route.params.name)
            this.$router.push({ name: 'userInfo', params: { name: user.name } })
          } else if (arg === 'wish') {
            redirect = '/user/' + user.name + '/wishlist'
          } else {
            redirect = '/user/' + user.name + '/shopbag'
          }
        }
        this.$router.push({
          path: redirect,
        })
      },
      handleItemClick(num) {
        console.log(num)
      },
      jumpToService(id) {
        let desUrl = this.$router.resolve({
          path: '/customerService/' + id,
        })
        window.open(desUrl.href, '_blank')
      },
    },
  }
</script>
<style lang="stylus">
  #homenav
    height: (1 / $r) * 161
    z-index: 2

  .collapse
    padding-left: (1 / $r) * 20

  .el-collapse-item__header
    font-size: (1 / $r) * 33
    font-weight: 600

  .collapse-item:last-child
    border-bottom: 1px solid #e5e5e5

  .logo-area
    display: flex
    height: 100%
    margin-right: (1 / $r) * 50

    .menu
      height: 100%
      width: (1 / $r) * 80
      margin-right: (1 / $r) * 10
      position: relative
      cursor: pointer
      background-color: #fff
      display: none
      border-radius: 50%
      transition-property: background-color
      transition-duration: 0.4s
      transition-timing-function: cubic-bezier(0.4, 0, 0, 1)

      &:hover
        background-color: #E5E5E5

      img
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)

    .logo
      cursor: pointer
      padding-top: (1 / $r) * 10

  .detail-nav
    display: flex
    padding-right: (1 / $r) * 120

    div
      flex: 1

  .nav-item
    font-weight: 700

  .icon-area
    display: flex
    height: 100%

  .icon-area
    div
      flex: 1
      cursor: pointer
      position: relative
      border-radius: 50%
      transition-property: background-color
      transition-duration: 0.3s
      transition-timing-function: cubic-bezier(0.4, 0, 0, 1)

      &:hover
        background-color: #E5E5E5

      img
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)

  .el-dropdown
    font-weight: 700
    cursor: pointer

  .el-col:last-child, .el-col:last-child div
    cursor: default
    pointer-events: none

  @media only screen and (max-width: 1009px)
    .detail-nav
      display: none

    .logo-area
      .menu
        display: block

      .logo
        padding-top: (1 / $r) * 2.5
</style>