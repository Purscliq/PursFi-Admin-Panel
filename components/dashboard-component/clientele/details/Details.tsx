"use client";

import React, { useState } from "react";
import Link from "next/link";

import { GoArrowLeft } from "react-icons/go";
import { DeactivateAccountModal } from "./DeactivateAccountModal";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import { Tabs } from "antd";

// tab components
import BusinessDetailsTab from "./Tabs/BusinessDetailsTab";
import InvoicesTab from "./Tabs/InvoicesTab";
import TransactionsTab from "./Tabs/TransactionsTab";
import RecentActivitiesTab from "./Tabs/RecentActivitiesTab";
import KycTab from "./Tabs/KYCTab";

type SizeType = ConfigProviderProps["componentSize"];

const Details = () => {
  const [size, setSize] = useState<SizeType>("small");

  const onChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const tabHeaders = [
    "Business Details",
    "Transactions",
    "Invoices",
    "Recent Activities",
    "KYC",
  ];

  const tabContent = [
    <BusinessDetailsTab />,
    <TransactionsTab />,
    <InvoicesTab />,
    <RecentActivitiesTab />,
    <KycTab />,
  ];

  return (
    <section className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
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
          <DeactivateAccountModal />
        </span>
      </div>

      <div className="mt-10">
        <Tabs
          defaultActiveKey="1"
          className="text-green-400"
          type="card"
          size={size}
          style={{ marginBottom: 0 }}
          tabBarGutter={15}
        >
          {tabHeaders.map((label, index) => (
            <Tabs.TabPane tab={label} key={String(index + 1)}>
              {tabContent[index]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Details;
