import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const DashboardLayout = ({ children, activeMenu }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0d0d0d]">
      <Navbar activeMenu={activeMenu} />

      {user ? (
        <div className="flex bg-transparent">
          <div className="max-[1080px]:hidden">
            <SideMenu activeMenu={activeMenu} />
          </div>

          <div className="grow mx-5">{children}</div>
        </div>
      ) : (
        <div className="text-center py-10">Loading...</div>
      )}
    </div>
  );
};

export default DashboardLayout;
