const menuList = [
  {
    title: "欢迎",
    path: '/home',
    icon: 'icon-home',
    key: '1'
  },
  {
    title: "轮播图信息",
    path: '/banner',
    icon: 'icon-tupianx',
    key: '2'
  },
  {
    title: "用户管理",
    path: '/user',
    icon: 'icon-user',
    key: '3',
    children: [
      {
        title: "创建用户",
        path: '/user/add',
        key: '7',
      },
      {
        title: "用户列表",
        path: '/user/list',
        key: '8',
      },
    ]
  },
  {
    title: "课程分类",
    path: '/classify',
    icon: 'icon-fenlei2',
    key: '4',
    children: [
      {
        title: "分类列表",
        path: '/classify/list',
        key: '9',
      },
      {
        title: "path列表",
        path: '/classify/path',
        key: '10',
      },
    ]
  },
  {
    title: "教师信息",
    path: '/teacher',
    icon: 'icon-team2',
    key: '5'
  },
  {
    title: "课程信息",
    path: '/course',
    icon: 'icon-course',
    key: '6'
  }
]

export default menuList;