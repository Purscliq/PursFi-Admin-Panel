"use client";
import { CustomTable as Table } from "@/lib/AntdComponents"
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { LuListFilter } from "react-icons/lu";
import BulkDrawer from "./BulkDrawer";

const BulkEmail = () => {
    const [isOpen, setOpen] = useState(false);

  const emailData = [
    {
      key: "1",
      name: "John Doe",
      email: "john@example.com",
      phoneNumber: "123-456-7890",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      phoneNumber: "987-654-3210",
    },
  ];

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <HiMiniChevronUpDown className="h-4 w-4 ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: () =><button onClick={() => setOpen(true)}>....</button>

    },
  ];

  return (
    <section className="relative max-w-[1640px] flex flex-col p-4 space-y-6 h-screen overflow-y-scroll">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-[25px] font-bold mb-1">Bulk Email</h2>
      </div>
      <div className="mt-8">
        <div className="w-full md:max-h-22 md:flex justify-between px-8 py-6 bg-white rounded-[1.25rem] border border-[#D6DDEB]">
          <div className="relative w-full md:w-[30rem]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none !bg-transaparent focus:border-gray-400"
            />
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="p-4 md:py-0 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
              <LuListFilter className="w-4 h-4 inline" /> Filter
            </button>
          </div>
        </div>
        <div className="bg-white rounded-[1.25rem] overflow-x-auto mt-4 p-0 border border-[#D6DDEB]">
          <Table columns={columns} dataSource={emailData} pagination={false}/>
        </div>
      </div>
      <BulkDrawer open={isOpen} cancel={()=>setOpen(false)} />
    </section>
  );
};

export default BulkEmail;
