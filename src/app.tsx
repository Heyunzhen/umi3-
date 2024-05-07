import { fetchRouter } from "@/services/User/api";
import React from "react";
import { Navigate } from "umi";
export async function patchRoutes({ routes }: { routes: any[] }) {
  console.log(routes); // 打印出所有动态生成的路由信息
}
let extraRoutes: any[] = [];
export function render(oldRender: () => void) {
  fetchRouter().then((res: any) => {
    extraRoutes = res;
    oldRender();
  });
}

export function patchClientRoutes({ routes }: { routes: any[] }) {
  // 找到'/'根路由下的routes信息
  const routerIndex = routes.findIndex((item: any) => item.path === "/");
  const parentId = routes[routerIndex].id;
  if (extraRoutes) {
    routes[routerIndex]["routes"].push(...loopMenuItem(extraRoutes, parentId));
  }
}

const loopMenuItem = (menus: any[], pId: number | string): any[] => {
  return menus.flatMap((item) => {
    let Component: React.ComponentType<any> | null = null;
    if (item.page) {
      // 防止配置了路由，但本地暂未添加对应的页面，产生的错误
      Component = React.lazy(
        () =>
          new Promise((resolve, reject) => {
            console.log(item);
            import(`@/pages${item.page}`)
              .then((module) => resolve(module))
              .catch((error) => resolve(import(`@/pages/404.tsx`)));
          })
      );
    }
    if (item.children) {
      return [
        {
          path: item.url,
          name: item.menuName,
          icon: item.icon,
          id: item.menuID,
          parentId: pId,
          children: [
            {
              path: item.url,
              element: <Navigate to={item.children[0].url} replace />,
            },
            ...loopMenuItem(item.children, item.menuID),
          ],
        },
      ];
    } else {
      return [
        {
          path: item.url,
          name: item.menuName,
          icon: item.icon,
          id: item.menuID,
          parentId: pId,
          element: (
            <React.Suspense fallback={<div>Loading...</div>}>
              {Component && <Component />}
            </React.Suspense>
          ),
        },
      ];
    }
  });
};
