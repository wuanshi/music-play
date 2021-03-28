<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header height="50px">
        <div class="top">
          <div class="top-left">
            <img src="../assets/icon.png" alt="" />
            <span class="top-name">网易云音乐</span>
            <i class="el-icon-arrow-left"></i>
            <i class="el-icon-arrow-right"></i>
            <!-- <div class="top-input">
              
            </div> -->
            <el-input
              placeholder="搜索"
              v-model="input"
              clearable
              size="medium"
              prefix-icon="el-icon-search"
            >
            </el-input>
            <i class="el-icon-mic"></i>
          </div>
          <div class="top-right">
            <i class="el-icon-user"></i>
            <label @click="handleClose">
              未登录<span class="el-icon-caret-bottom"></span>
            </label>
            开通VIP
            <span class="el-icon-setting"></span>
            <span class="el-icon-message"></span>|
            <span class="el-icon-minus"></span>
            <span class="el-icon-close"></span>
          </div>
        </div>
      </el-header>
      <!-- 主体区域 -->
      <el-container>
        <el-aside width="200px"> </el-aside>
        <el-container>
          <el-main>
            <router-view to=""></router-view>
          </el-main>
        </el-container>
      </el-container>
      <!-- 底部区域 -->
      <el-footer height="104px">Footer</el-footer>
    </el-container>
    <!-- 登录对话框 title="登录"-->
    <el-dialog :visible.sync="dialogVisible" width="380px">
      <img src="../assets/loginTop.jpg" alt="" />
      <el-input placeholder="手机号" v-model="userMessage.phone"></el-input>
      <el-input
        placeholder="请输入密码"
        v-model="userMessage.password"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      // 登录对话框是否开启
      dialogVisible: false,
      userMessage: {
        phone: "19928348348",
        password: "123445",
      },
      // 自动登录
      checkedLogin: false,
      // 同意条款
      checkedAgree: false,
    };
  },
  methods: {
    // 登录对话框
    // 点击右上角登录部分显示登录弹窗
    handleClose() {
      this.dialogVisible = true;
    },
    // 确认用户信息
    async confirmLogin() {
      // ?phone=${this.userMessage.phone}&password=${this.userMessage.password}
      const res = await this.$http.post("http://localhost:3000/login/cellphone", {
        phone: this.userMessage.phone,
        password: this.userMessage.password
      });
      // console.log(res);
      // this.$http(
      //   "/api/login/cellphone?phone=19923323289&password=12345678"
      // ).then((res) => {
      //   console.log(res);
      // });
      // const res = await this.$http.get(
      //   `/api/login/cellphone?phone=${this.userMessage.phone}&password=${this.userMessage.password}`
      // );
      // console.log(res);
      // const res = await this.$http.post(
      //   "/api/login/cellphone",
      //   this.userMessage
      // );
      console.log(res);
      this.dialogVisible = false;
    },
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
  line-height: 60px;
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
  //   line-height: 755px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>