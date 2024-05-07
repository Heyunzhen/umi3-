import React, { useState } from "react";
import { useRouteProps } from "umi";

const ListComponent: React.FC = () => {
  let route = useRouteProps();
  console.log(route);
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
  ];

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default ListComponent;