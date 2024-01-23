"use client";
import React, { useState } from "react";
import Link from "next/link";

import { GoArrowLeft } from "react-icons/go";
import DeactivateAccountModal from "./DeactivateAccountModal";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";

// tab components
import BusinessDetailsTab from "./Tabs/BusinessDetailsTab";
import InvoicesTab from "./Tabs/InvoicesTab";
import TransactionsTab from "./Tabs/TransactionsTab";
import RecentActivitiesTab from "./Tabs/RecentActivitiesTab";
import KycTab from "./Tabs/KYCTab";
import { ClienteleTableData } from "../../content";

interface Iprops {
  id: number;
  // businessname: string;
  // account: string;
  // type: string;
  // email: string;
}
interface Iprops {
  id: number;
  businessname: string;
  account: string;
  type: string;
  email: string;
}

const Details = ({ data }: { data: Iprops | null }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Business Details",
      children: <BusinessDetailsTab />,
    },
    {
      key: "2",
      label: "Transactions",
      children: <TransactionsTab />,
    },
    {
      key: "3",
      label: "Invoices",
      children: <InvoicesTab />,
    },
    {
      key: "4",
      label: "Recent Activities",
      children: <RecentActivitiesTab />,
    },
    {
      key: "5",
      label: "KYC",
      children: <KycTab />,
    },
  ];
  return (
    <section className="max-w-[1640px] bg-white flex flex-col p-4  h-screen overflow-y-scroll">
      <div className="md:flex justify-between border-b">
        <span className="flex gap-2">
          <Link href="/clientele" className="py-2" title="Back to Clientele">
            <GoArrowLeft className="w-8 h-8" /> {""}
          </Link>
          <h2 className="text-[2.25rem] font-bold mb-1 leading-none md:leading-[3rem]">
            Clientele -{" "}
            <span className="font-normal text-[1.3rem] text-[#7C8493]">
              APP-202006060640-7038
            </span>
          </h2>
        </span>

        <span>
          <p className="text-[0.875rem] text-[#40DD7F]">Activate account</p>
          {/* <p className="text-[0.875rem] text-[#F6513B]">Deactivate account</p> */}
          <DeactivateAccountModal />
        </span>
      </div>

      <div className="mt-10">
        <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
      </div>
    </section>
  );
};

export default Details;
