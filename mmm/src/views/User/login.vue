<template>
  <div class="loginpage">
    <div class="bg"></div>
    <div class="loginzone">
      <div class="loginbox">
        <el-form
          label-position="top"
          size="large"
          :rules="rules"
          :model="userinfo"
          ref="myForm"
        >
          <el-form-item label="用户名" label-width="100px" prop="uname">
            <el-input
              placeholder="请输入用户名 "
              v-model="userinfo.uname"
              clearable
            >
              <template #prefix>
                <i class="iconfont icon-dongwutubiao-xianxing-zhu"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="100px" prop="pwd">
            <el-input
              type="password"
              placeholder="请输入密码🐎"
              v-model="userinfo.pwd"
              :show-password="true"
            >
              <template #prefix>
                <i class="iconfont icon-dongwutubiao-xianxing-laoshu"></i>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码" label-width="100px" prop="code">
            <el-row style="width: 400px">
              <el-col :span="16">
                <el-input
                  v-model="userinfo.code"
                  placeholder="验证码啊验证码"
                  :maxlength="5"
                >
                  <template #prefix>
                    <i class="iconfont icon-dongwutubiao-xianxing-laoshu"></i>
                  </template>
                </el-input>
              </el-col>
              <el-col :span="7" :offset="1">
                <div class="code"></div>
              </el-col>
            </el-row>
          </el-form-item>

          <el-button class="mt20" type="primary" @click="handleLogin"
            >谁的电话嗯嗯响哇</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>
  <!-- 组合api -->
<script setup lang="ts">
import { ElMessage } from "element-plus";
import {showMsg} from '@/util/toast';
import { reactive, ref, getCurrentInstance } from "vue";
import type { FormInstance, FormRules } from "element-plus";
//在组合式api当中实现 导航式编程
import { useRouter } from "vue-router";

const { appContext } = getCurrentInstance();
const ctx = appContext.config.globalProperties; // 通过ctx可以调用所有在 实例的全局的方法

const router = useRouter(); //router就相当于配置api当中的this.$router

interface Userinfo {
  uname: string;
  pwd: string;
  code: string;
}
const userinfo = reactive<Userinfo>({
  uname: "拾柒1",
  pwd: "123456",
  code: "11111",
});

// 登录表单校验
const rules = reactive<FormRules>({
  uname: [
    { required: true, message: "这里要填写哇！", trigger: "blur" },
    { min: 3, message: "内你填就好好填喽", trigger: "blur" },
  ],
  pwd: [{ required: true, message: "这里也要填写哇！!!", trigger: "blur" }],
  code: [
    { required: true, message: "你这个喜仔，内~等一下我就", trigger: "blur" },
    { len: 5, message: "5位数哇喜仔", trigger: "blur" },
  ],
});

//创建一个ref对象目的是为了让表单from组件通过ref属性来跟这个ref对象绑定
const myForm = ref<FormInstance>();

const handleLogin = async () => {
  console.log("userinfo", userinfo);
  (myForm.value as FormInstance).validate((isValid, invalidFields) => {
    console.log("结果是", isValid);
    console.log("没有", invalidFields);
    //todo 对于错误的检验结果给一个更加明显得提示给用户
    if (isValid) {
      // 验证成功就跳转
      // router.replace('/index')
      // 另外一种跳转方式 并携带用户信息
      router.replace({
        name: "index",
        query: {
          user: userinfo.uname,
          a: 123,
        },
        params: {
          //如果通过params参数来声明，我们的路由配置当中的path需要声明动态参数
          c: 1,
          id: 456,
        },
      });
    } else {
        showMsg('表单验证失败')
    }
  });

  // try {
  //   await (myForm.value as FormInstance).validate();
  //   console.log("成功");
  // } catch (e) {
  //   console.log("失败");
  // }
};
</script>

<script lang="ts">
export default {
  name: "loginPage",
};
</script>
  
<style scoped lang="scss">
//  scoped的配置标识的是当前的样式尽在当前组件内有效 局部样式 避免组件同名污染
@media screen and (min-width: 900px) {
  .loginpage {
    width: 100vw;
    height: 100vh;
    display: flex;
    .bg {
      width: 50vw;
      background: blue;
    }
    .loginzone {
      width: 50vw;
      background: #fff;
      padding: 20px;
    }
  }
}

@media screen and (max-width: 900px) {
  .loginpage {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: blue;
    .bg {
      display: none;
    }
    .loginzone {
      width: 50vw;
      min-width: 495px;
      padding: 20px;
      background: #fff;
    }
  }
}
.loginzone {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loginbox {
  width: 500px;
  height: 460px;
}
.code {
  height: 40px;
  border: 1px solid #000;
}
.mt20 {
  margin-top: 10px;
  width: 268px;
}
</style>