import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index", id: "001", name: "aaaaaaaaaaa" },
    {
      path: "/docs",
      routes: [
        {
          path: "/docs",
          redirect: "/docs/list",
        },
        {
          path: "/docs/list",
          component: "list",
          title: "列表页",
          parentKeys: "/docs",
        },
        {
          path: "/docs/detail",
          component: "abc",
        },
      ],
    },
  ],
  npmClient: "pnpm",
});
