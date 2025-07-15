import TabBar from "@/components/tab-bar";
import { Outlet } from "react-router-dom";


export default function Layout() {


  return (
    <>
      <Outlet />
      <TabBar />
    </>
  );
}
