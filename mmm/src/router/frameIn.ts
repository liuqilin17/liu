import Home from '@/views/Home.vue';

const famesIn=[
    //子路由
    {//首页
      name: 'index',
      // path: 'index/:id/:c',//动态参数
      path:'index',
      component: Home,
    },
    {
      name:'qa',
      path:'qa',
      component:() => import('@/views/qa.vue')
    },
    {//学员管理
      name:'stu',
      path:'stu',
      component:()=>import('@/views/stu.vue')
    },
    {
      name:'company',
      path:'company',
      component:()=>import('@/views/company.vue')
    },
];

export default famesIn;