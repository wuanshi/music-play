<template>
  <div class="bottom">
    <div class="left">
      <img src="" alt="" />
      <div class="songmessage">
        <div class="songName">BOOM CLOP</div>
        <div class="songer">Sanser</div>
      </div>
    </div>
    <div class="center">
      <div>
        <el-button @click="changeOrder" :icon="icons[index].item"></el-button>
        <el-button icon="el-icon-caret-left"> </el-button>
        <el-button icon="el-icon-video-pause" v-if="isplay"> </el-button>
        <el-button icon="el-icon-video-play" v-else> </el-button>
        <el-button icon="el-icon-caret-right"> </el-button>
        <span>词</span>
      </div>
      <!-- 时间进度条 -->
      <div>
        <el-slider v-model="voice"></el-slider>
      </div>
    </div>
    <div class="right">
      <!-- 音量滑块 -->
      <div class="voiceBar">
        <el-slider v-model="voice"></el-slider>
      </div>
      <el-button icon="el-icon-caret-top"></el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isplay: false,
      index: 1,
      voice: 50,
      icons: [
        {
          item: "el-icon-remove-outline",
        },
        {
          item: "el-icon-circle-plus-outline",
        },
        {
          item: "el-icon-circle-check",
        },
      ],
    };
  },
  methods: {
    changeOrder() {},
  },
};
</script>

<style lang="less" scoped>
.bottom {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .left {
    display: flex;
    align-items: center;
    background-color: pink;
    .songmessage {
      // display: flex;
      .songNane {
        height: 1.5rem;
      }
      .singer {
        height: 1rem;
      }
    }
    img {
      height: 3rem;
      width: 3rem;
      background-color: red;
      border-radius: 0.5rem;
      overflow: hidden;
    }
    li {
      height: 30px;
    }
  }
  .center {
    background-color: skyblue;
    span {
      margin: 8px;
      padding: 8px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    background-color: pink;
    .voiceBar {
      width: 100px;
    }
    .el-button {
      outline: hidden;
      // font-size: 2rem;
      border: 0;
    }
  }
}
</style>