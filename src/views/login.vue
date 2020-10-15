<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
          <van-button plain hairline type="info" size="small" native-type="submit" block>提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      if( values )  this.$router.push({name:'index'})
    },
  },
};
</script>

<style lang="less">
    .login {
        padding: 10px;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        // background-color: rgb(226, 226, 226);
    }
    .van-form{
        border-radius: 4px;
        border: 1px solid #eee;
        // background: rgb(219, 219, 219);
    }
</style>