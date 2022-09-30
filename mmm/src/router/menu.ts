interface menu {
  name: string;
  url: string;
}

const menus: Array<menu> = [
  { name: "首页", url: "/index" },
  { name: "学员管理", url: "/stu" },
  { name: "公司管理", url: "/company" },
  { name: "题库管理", url: "/qa" },
];

export default menus;
