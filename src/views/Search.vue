<template>
  <div>
    <!-- 头部导航栏 -->
    <el-menu
      default-active="recommend"
      class="el-menu-demo"
      mode="horizontal"
      height="30px"
      router
    >
      <el-menu-item v-for="item in list" :key="item.path" :index="item.path">{{
        item.content
      }}</el-menu-item>
    </el-menu>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/search/recommend",
          content: "个性推荐",
        },
        {
          path: "/search/song",
          content: "歌单",
        },
        {
          path: "/search/radio",
          content: "主播电台",
        },
        {
          path: "/search/rank",
          content: "排行榜",
        },
      ],
      path:''
    };
  },
  created() {
    this.getList();
  },
  // 保持跳转路由之前的状态
  activated() {
    this.$router.push(this.path);
    // console.log("activated");
  },
  // beforeRouteEnd(to,from,next){
    
  //   next()
  // },
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    this.path = this.$route.path;
    next();
  },

  methods: {
    // 首页信息
    async getList() {},
  },
};
</script>

<style lang="less" scoped>
</style>>