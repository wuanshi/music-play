<template>
  <div id="app">
    <el-container>
      <!-- 头部区域 -->
      <el-header height="50px">
        <!-- 搜索栏 -->
        <top-bar />
      </el-header>
      <!-- 主体区域 -->
      <el-container>
        <!-- width="200px" -->
        <el-aside width="200px">
          <!-- 侧边导航区域 -->
          <aside-nav />
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
        </el-container>
      </el-container>
      <!-- 底部区域  -->
      <el-footer height="78px">
        <bottom-nav />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopBar from "./components/TopBar";
import AsideNav from "./components/AsideNav";
import BottomNav from "./components/BottomNav";
export default {
  name: 'app',
  data() {
    return {
      path: "/search/recommend",
    };
  },
  components: {
    TopBar,
    AsideNav,
    BottomNav,
  },
  created() {
    this.$router.push(this.path);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #ec4141;
  color: #fce4e4;
  font-size: 15px;
  line-height: 50px;
}
.el-footer {
  background-color: #f6f6f8;
  color: #333;
  text-align: center;
  // line-height: 60px;
  padding: 0 10px;
  overflow: hidden;
}
.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 0 30px;
  //   line-height: 755px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>