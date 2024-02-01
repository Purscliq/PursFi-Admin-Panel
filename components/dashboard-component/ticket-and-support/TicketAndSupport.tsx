"use client";

import React from "react";
import { CustomTabs as Tabs } from "@/lib/AntdComponents";
import { CustomSelect as Select } from "@/lib/AntdComponents";
import type { TabsProps } from "antd";
import AllTicketsTab from "./Tabs/AllTicketsTab";
import NewTicketsTab from "./Tabs/NewTicketsTab";
import OngoingTicketsTab from "./Tabs/OngoingTicketsTab";
import ResolvedTicketsTab from "./Tabs/ResolvedTicketsTab";
import TicketIcon from "@/assets/svg/TicketIcon";
import NewTicketIcon from "@/assets/svg/NewTicketIcon";
import OnGoingTicketIcon from "@/assets/svg/OnGoingTicketIcon";
import ResolvedTicketIcon from "@/assets/svg/ResolvedTicketIcon";
import { CiSearch } from "react-icons/ci";

const handleChange = (value: { value: string; label: React.ReactNode }) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

const TicketAndSupport = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <span className="flex gap-2 px-2">
          <TicketIcon /> All Tickets
        </span>
      ),
      children: <AllTicketsTab />,
    },
    {
      key: "2",
      label: (
        <span className="flex gap-2 px-2">
          <NewTicketIcon /> New
        </span>
      ),
      children: <NewTicketsTab />,
    },
    {
      key: "3",
      label: (
        <span className="flex gap-2 px-2">
          <OnGoingTicketIcon /> On-Going
        </span>
      ),
      children: <OngoingTicketsTab />,
    },
    {
      key: "4",
      label: (
        <span className="flex gap-2 px-2">
          <ResolvedTicketIcon /> Resolved
        </span>
      ),
      children: <ResolvedTicketsTab />,
    },
  ];

  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Ticket and Support</h2>
      </span>

      <section className="bg-white p-4 space-y-4">
        <div className="lg:flex gap-4 justify-between space-y-2 lg:space-y-0">
          <div className="relative w-full md:w-[19rem]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input
              type="text"
              placeholder="Search for Ticket"
              className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
            />
          </div>

          <div className="flex gap-2">
            {/* use status select from here : https://floatui.com/components/select-menus */}
            <select
              className="p-4 text-base rounded-[0.25rem] border border-[#D6DDEB] text-[#84818A]"
              title="Select Priority"
            >
              <option value="">Select Priority</option>
              <option value="new ticket"> New Ticket</option>
              <option value="ongoing ticket">On-Going Ticket</option>
              <option value="resolved ticket">Resolved Ticket</option>
            </select>

            {/* <Select
              labelInValue
              defaultValue={{ value: "lucy", label: "Lucy (101)" }}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "jack",
                  label: "Jack (100)",
                },
                {
                  value: "lucy",
                  label: (
                    <div className="flex gap-2 px-2">
                      {" "}
                      <div className="w-4 h-4 bg-blue-500 rounded-full" /> New
                      Ticket
                    </div>
                  ),
                },
              ]}
            /> */}

            <select
              className="p-4 text-base rounded-[0.25rem] border border-[#D6DDEB] text-[#84818A]"
              title="Select Time"
            >
              <option value="">Select Time</option>
              <option value="this week">This Week</option>
              <option value="last week">Last Week</option>
            </select>
          </div>
        </div>

        <div className="">
          <Tabs defaultActiveKey="1" items={items} tabBarGutter={15} />
        </div>
      </section>
    </section>
  );
};

export default TicketAndSupport;
