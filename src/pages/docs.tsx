import { Outlet } from "umi";
const DocsPage = () => {
  return (
    <div>
      <p>This is umi docs.</p>
      <Outlet />
    </div>
  );
};

export default DocsPage;
