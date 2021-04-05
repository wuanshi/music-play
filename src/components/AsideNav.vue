<template>
<!-- 侧边栏导航 -->
  <div class="aside">
    <el-menu router>
      <el-menu-item-group>
        <el-menu-item :index="submenu[0].path">
          {{ submenu[0].content }}
        </el-menu-item>
        <el-menu-item :index="submenu[1].path">
          {{ submenu[1].content }}
        </el-menu-item>
        <el-menu-item :index="submenu[2].path">{{
          submenu[2].content
        }}</el-menu-item>
        <el-menu-item :index="submenu[3].path">{{
          submenu[3].content
        }}</el-menu-item>
        <el-menu-item :index="submenu[4].path">{{
          submenu[4].content
        }}</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">我的音乐</template>
        <el-menu-item :index="submenu[5].path">{{
          submenu[5].content
        }}</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">创建歌单</template>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // aside 数据
      submenu: [
        {
          path: "/search",
          content: "发现音乐",
        },
        {
          path: "/vedios",
          content: "视频",
        },
        {
          path: "/friend",
          content: "朋友",
        },
        {
          path: "/live",
          content: "直播",
        },
        {
          path: "/private",
          content: "私人FM",
        },
        {
          path: "/local",
          content: "本地音乐",
        },
        {
          path: "/",
          content: "本地下载",
        },
        {
          path: "/",
          content: "我喜欢的音乐",
        },
      ],
    };
  },
  methods:{
      
  }
};
</script>

<style lang="less" scoped>
</style>