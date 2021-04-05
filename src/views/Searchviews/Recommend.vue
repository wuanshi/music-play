<template>
  <div class="recommend">
    <el-carousel :interval="4000" type="card" height="250px">
      <el-carousel-item v-for="item in photoes" :key="item.imageUrl">
        <img :src="item.imageUrl" alt="#" />
      </el-carousel-item>
    </el-carousel>
    <div class="entitle">
      <a href="#">推荐歌单 &gt;</a>
    </div>
    <div class="SongList">
      <span v-for="item in songlist" :key="item.picUrl">
        <img :src="item.picUrl" alt="">
        <p>{{item.name}}</p>
      </span>
    </div>
    <div class="entitle">
      <a href="#">独家放送 &gt;</a>
    </div>
    <div class="onlyplay">
      <span v-for="item in onlyplay" :key="item.id">
        <img :src="item.sPicUrl" alt="">
        <p>{{item.name}}</p>
      </span>
    </div>
    <div class="entitle">
      <a href="#">最新音乐 &gt;</a>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      photoes: [],
      // 歌单
      songlist:[],
      // 独家放送
      onlyplay:[]
    };
  },
  created() {
    // 获取轮播图图片
    this.getPhotoes();
    this.getSong();
    // 独家放送
    this.getOnlyPlay()
  },
  methods: {
    async getPhotoes() {
      const res = await this.$http.get("/banner");
      this.photoes = res.data.banners;
      // console.log(res);
      // console.log("------------");
      // console.log(res.data.banners);
      // console.log(this.photoes);
    },
    // 获取推荐歌单
    async getSong() {
      const res = await this.$http.get("/personalized?limit=10");
      this.songlist = res.data.result
      // console.log(res.data.result);
    },
    // 独家放送
    async getOnlyPlay(){
      const res = await this.$http.get('/personalized/privatecontent')
      console.log(res.data.result);
      this.onlyplay = res.data.result
    }
  },
};
</script>

<style lang="less" scoped >
.recommend {
  .el-carousel {
    .el-carousel__item {
      img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  .entitle {
    // 清除浮动
    overflow: hidden;
    margin: 8px 0 8px 0;
    a {
      float: left;
      font-weight: 550;
      font-size: 1.2rem;
    }
  }
  .SongList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    span {
      width: 19%;
      height: 22%;
      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
      }
      p {
        margin: 5px 0 5px 0;
        font-size: .9rem;
        
      }
    }
  }
  .onlyplay {
    display: flex;
    justify-content: space-between;
    span {
      // width: 33%;
      height: 25%;
      margin: 0 7px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 5px;
      }
      p {
        margin: 5px 0 5px 0;
        font-size: .9rem;
        
      }
    }
  }
}
</style>