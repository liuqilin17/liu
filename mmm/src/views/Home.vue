<template>
  <div>我是首页</div>
  <el-button type="primary" :loading="true">加载中</el-button>
</template>


<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute(); //router是执行跳转的，route是路由信息，路由信息就包括了所有的跳转c'c
onMounted(() => {
  console.log("路由信息是 query", route.query);
  console.log("路由信息是 params", route.params);
});
</script>

  <!-- 分界线 -->
<script lang="ts">
export default {
  name: "homePage",
};
</script>


<style scoped></style>
