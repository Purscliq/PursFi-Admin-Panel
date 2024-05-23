"use client";
import { useState } from "react";
import {
  CustomTable as Table,
  // CustomInput as Input,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import Link from "next/link";
import { TransactionClient } from "../content";
import { useGetTopClientsQuery } from "@/services/transactionSlice";

interface DataType {
  id: number;
  businessname: string;
  account: string;
}

const TopClient = () => {
  const [Data, setData] = useState<DataType[]>(TransactionClient);
  const { data: topClients, isLoading } = useGetTopClientsQuery({});

  const columns: ColumnsType<DataType> = [
    {
      title: "Business Name",
      sorter: true,
      dataIndex: "businessName",
      render: (businessname) => `${businessname}`,
      width: "20%",
    },

    {
      title: "Account",
      sorter: true,
      dataIndex: "accountNumber",
      render: (account) => `${account}`,
      width: "20%",
    },
  ];

  return (
    <div className="border border-[#D6DDEB] w-full bg-white p-4 rounded-[20px] h-fit">
      <div className="w-full md:max-h-20 md:flex justify-between items-center  py-6 ">
        <p>Top Clientele</p>

        <div className="flex gap-4">
          <button className="p-3 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
            <LuListFilter className="w-4 h-4 inline" /> {"  "}
            Filter
          </button>
        </div>
      </div>
      <div className=" overflow-x-auto ">
        <Table columns={columns} dataSource={topClients} />
      </div>
    </div>
  );
};

export default TopClient;
