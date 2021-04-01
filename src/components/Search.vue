<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      height="30px"
      @select="handleSelect"
      router
    >
      <el-menu-item v-for="item in list" :key="item.path" :index="item.path">{{
        item.content
      }}</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/recommend",
          content: "个性推荐",
        },
        {
          path: "/song",
          content: "歌单",
        },
        {
          path: "/radio",
          content: "主播电台",
        },
        {
          path: "/rank",
          content: "排行榜",
        },
      ],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 首页信息
    async getList() {
      // const res = await this.$http.get('/homepage/block/page')
      // console.log(res);
    },
  },
};
</script>

<style lang="less" scoped>
</style>>