import React from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";

import MembersTab from "./Tabs/MembersTab";
import RolesTab from "./Tabs/RolesTab";

const RolesAndPermissions = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Members",
      children: <MembersTab />,
    },
    {
      key: "2",
      label: "Roles",
      children: <RolesTab />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Roles and Permissions</h2>
      </span>

      <div className="mt-10">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default RolesAndPermissions;
