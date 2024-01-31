import React from "react";
import Profile from "./setting-tab/Profile";
import AdminActivitics from "./setting-tab/AdminActivitics";
import { TabsProps } from "antd";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";

const Setting = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Profile",
      children: <Profile />,
    },
    {
      key: "2",
      label: "Admin Activity",
      children: <AdminActivitics />,
    },
  ];
  return (
    <section className="max-w-[1640px] flex flex-col bg-[#FAFAFA] px-6 py-4 space-y-3  md:h-screen overflow-y-scroll">
      <h2 className="text-[25px] font-bold mb-1">Setting</h2>
      <div className=" bg-white p-3">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default Setting;
