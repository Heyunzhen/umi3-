const RouterList = [
  {
    icon: "icon-list",
    menuID: 40,
    menuName: "list",
    pid: 0,
    page: "/hyzlist",
    url: "/listhyz",
  },
  {
    icon: "icon-table",
    menuID: 41,
    menuName: "table",
    pid: 0,
    url: "/table",
    children: [
      {
        menuID: 42,
        menuName: "tableTest",
        pid: 41,
        page: "/Table/Test",
        url: "/table/test",
      },
    ],
  },
];

export async function fetchRouter() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(RouterList);
    }, 1000);
  });
}
