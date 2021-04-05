<template>
  <div class="top">
    <div class="top-left">
      <img src="../assets/icon.png" alt="" />
      <span class="top-name">网易云音乐</span>
      <i class="el-icon-arrow-left" @click="go('back')"></i>
      <i class="el-icon-arrow-right" @click="go('forward')"></i>
      <el-input
        placeholder="搜索"
        v-model="seek"
        clearable
        size="medium"
        prefix-icon="el-icon-search"
      >
      </el-input>
      <i class="el-icon-mic"></i>
    </div>
    <div class="top-right">
      <i class="el-icon-user"></i>
      <label @click="handleClose" v-if="!isLogin">
        未登录<span class="el-icon-caret-bottom"></span>
      </label>
      <label @click="userSetting" v-if="isLogin">
        {{ userInfo.nickname }}<span class="el-icon-caret-bottom"></span>
      </label>
      开通VIP
      <span class="el-icon-setting"></span>
      <span class="el-icon-message"></span>|
      <span class="el-icon-minus"></span>
      <span class="el-icon-close"></span>
    </div>
    <!-- 登录对话框"-->
    <el-dialog :visible.sync="dialogVisibleLogin" width="380px">
      <img src="../assets/loginTop.jpg" alt="" />
      <el-input placeholder="手机号" v-model="phone"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      <el-checkbox v-model="checkedLogin">自动登录</el-checkbox>
      <el-button type="danger" @click="confirmLogin">登录</el-button>
      <a class="register" href="">注册</a>
      <el-checkbox v-model="checkedAgree"
        ><span>同意</span><a href="">《服务条款》</a><a href="">《隐私政策》</a
        ><a href="">《儿童隐私政策》</a></el-checkbox
      >
    </el-dialog>
    <!-- 登录对话框 -->
    <el-dialog :visible.sync="dialogVisibleSet" width="380px">
      <el-button @click="logout">退出登录</el-button>
    </el-dialog>
    <!-- 注册对话框 -->
    <!-- 先不弄这个了 这里代码太多 等以后再来抽出来一些 -->
    <!-- <el-dialog :visible.sync="dialogVisibleSet" width="380px">
      <img src="../assets/loginTop.jpg" alt="" />
      <el-input placeholder="手机号" v-model="phone"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="password"
        show-password
      ></el-input>
      
      <el-button @click="register">注册</el-button>
    </el-dialog> -->
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      // 搜索
      seek: "",
      // 未登录对话框是否开启
      dialogVisibleLogin: false,
      // 登录时对话框是否开启
      dialogVisibleSet: false,
      // 用户信息
      userInfo: {},
      // 用户名称
      // username: "",
      // 手机号码
      phone: "",
      // 登录密码
      password: "",
      // 是否已经登录
      isLogin: false,
      // 自动登录
      checkedLogin: false,
      // 同意条款
      checkedAgree: false,
    };
  },
  computed: {
    // ...mapGetters(["loginUserInfo"]),
  },
  // 页面刷新 保存在vuex中的登录信息取出 
  mounted() {
    if (localStorage.getItem("userInfo")) {
      this.isLogin = true;
      this.userInfo = this.$store.state.userInfo;
      // vuex还使用的不熟 有时间再去看看
      // 从localStorage.getItem('userInfo')取出的数据不能很好的显示在页面上 取出来的数据格式不同JSON
      // this.userInfo = localStorage.getItem('userInfo')
      // 数据的格式不一样 要将localStorage.getItem('userInfo')数据进行解析
      // this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      // console.log(this.userInfo);
      // console.log('------------------');
      // console.log(JSON.parse(localStorage.getItem('userInfo')));
    }
  },
  methods: {
    // 实现登录 页面刷新状态不变
    // ...mapMutations(["updateData"]),
    // 路由前进后退
    go(where) {
      if (where === "back") this.$router.go(-1);
      else this.$router.go(1);
    },
    // 未登录对话框
    // 点击右上角登录部分显示登录弹窗
    handleClose() {
      this.dialogVisibleLogin = true;
    },
    // 登录时对话框
    userSetting() {
      this.dialogVisibleSet = true;
    },
    // 确认用户信息
    async confirmLogin() {
      if (!this.checkedAgree) {
        return this.$message.error("请先勾选同意《服务条款》");
      }
      // 呜呜 这里终于好了 被之前在gitee上面下载的api接口坑惨了 不知道是多久之前的版本了 将近卡在这里一个星期了
      const res = await this.$http.post("/login/cellphone", {
        phone: this.phone,
        password: this.password,
      });
      if (res.data.code !== 200) {
        return this.$message.error("登录失败!");
      }
      console.log(res.data);
      console.log(res.data.token);
      // 保存个人信息
      this.userInfo = res.data.profile;
      localStorage.setItem("token", res.data.token);
      this.$store.commit("setUserInfo", this.userInfo);
      // 也可以不过感觉响应的有点慢
      // this.$store.commit("setUserInfo", res.data.profile);

      this.isLogin = true;
      this.dialogVisibleLogin = false;
    },
    // 退出登录
    async logout() {
      const { data: res } = await this.$http.get("/logout");
      if (res.code !== 200) {
        return this.$message.error("退出失败!");
      }
      // 退出登录 移除所有localStorage
      localStorage.clear();
      // 更新userInfo
      // this.$store.commit('setUserInfo','')
      this.isLogin = false;
      this.dialogVisibleSet = false;
    },
    // 注册账号
    // register(){
    //   console.log('');
    // }
  },
};
</script>

<style lang="less" scoped>
// 头部样式
.top {
  display: flex;
  justify-content: space-between;
  // align-items: center;
  .top-left {
    display: flex;
    align-items: center;
    .top-name {
      color: white;
      font-size: 1.5rem;
      padding-left: 20px;
      margin-right: 3rem;
    }
    i {
      border-radius: 50%;
      background: #d93b3b;
      padding: 5px;
      margin: 5px;
    }
    .el-input {
      width: 180px;
      border-radius: 40%;
      overflow: hidden;
      border: 0;
      outline: none;
      // text-decoration: none;
    }
  }
  .top-right {
    span {
      margin: 8px;
    }
    margin-right: 10px;
  }
}
// 登录对话框
.el-dialog {
  img {
    width: 100%;
    height: 50%;
  }
  .el-button {
    width: 100%;
    margin-top: 0.3rem;
  }
  .register {
    display: block;
    text-align: center;
  }
  .el-checkbox {
    font-size: 0.2rem;
  }
}
</style>