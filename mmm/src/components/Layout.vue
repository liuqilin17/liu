<template>
 <div class="layout">
  <el-container>
   <el-header></el-header>
     <el-container>
       <el-aside width="200px">
        <el-menu>
            <el-menu-item :index="item.url" @click="menuClick" v-for="item of menus" :key="item.name">{{item.name}}</el-menu-item>
        </el-menu>
       </el-aside>
       <el-main>
        <router-view></router-view>
       </el-main>
     </el-container>
  </el-container>
 </div>
</template>

<script>
import menus from "@/router/menu";
export default {
  name: "layoutView",
  data() {
    return {
      menus,
    };
  },
  methods: {
    goto(url) {
      //通过this.$router.push方法可以实现页面跳转
      //编程式导航，通过js代码来实现跳转
      // this.$router.push(url);
      this.$router.replace(url);
    },
    menuClick(res){
      this.$message({
        showClose:true,
        message:'内~~',
        type:'warning'
      })
      this.$router.push(res.index);
    }
  },
};
</script>

<style scoped lang="scss">

  .layout{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  // 如果你需要修改一个 第三方组件的样式的话你怎么修改  ::v-deep通过这个内置类名来实现组件样式穿透
  ::v-deep{
    .el-menu{
      border-right: none;
      --el-menu-bg-color: rgba(180, 180, 180, 0.45);
    }
  
    .el-aside {
      background: rgba(180, 180, 180, 0.84);
    }
    .el-header{
      border-bottom: 1px solid rgba(180, 180, 180, 0.84)
    }
  }
  
  </style>