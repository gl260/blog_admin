const menus = [
  {
    title: "首页",
    icon: "",
    path: "/",
  },
  {
    title: "类别", //网络
    icon: "",
    child: [
      {
        title: "华硕",
        icon: "",
        path: "/category/asus",
      },
      {
        title: "拯救者",
        icon: "",
        path: "/category/lenovo",
      },
    ],
  },
  {
    title: "CPU",
    icon: "",
    child: [
      {
        title: "AMD",
        icon: "",
        path: "/cpu/amd",
      },
      {
        title: "Intel",
        icon: "",
        path: "/cpu/intel",
      },
    ],
  },
];
export default menus;
