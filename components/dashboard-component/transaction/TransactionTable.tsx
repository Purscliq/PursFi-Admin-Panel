"use client";
import { useState } from "react";
import {
  CustomTable as Table,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import {  TransactionTableData } from "../content";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import Link from "next/link";

interface DataType {
  id: number;
  name: string;
  service: string;
  type: string;
  status: string;
  amount: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const TransactionTable = () => {
  const [Data, setData] = useState<DataType[]>(TransactionTableData);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "Business Name",
      sorter: true,
      dataIndex: "name",
      render: (name) => (
        <span>
          <p>{name}</p>
          <p>ID:123456</p>
        </span>
      ),
    },
    {
      title: "Service",
      sorter: true,
      dataIndex: "service",
      render: (service) => (
        <span>
          <p>{service}</p>
          <p>(DSTV)</p>
        </span>
      ),
    },
    {
      title: "Status",
      sorter: true,
      dataIndex: "status",
      render: (type) =>
        type === "failed" ? (
          <span className="p-[4%] w-full rounded-[80px] bg-[#FF39561A]/[10%] text-[#FF3956] text-center text-[14px] font-[700]">
            {type}
          </span>
        ) : (
          <span className="p-[4%] w-full rounded-[80px] bg-[#0AA07B]/[10%] text-[#0AA07B] text-center text-[14px] font-[700]">
            {type}
          </span>
        ),
    },
    {
      title: "Amount",
      sorter: true,
      dataIndex: "amount",
      render: (amount) => `${amount}`,
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <HiMiniChevronUpDown className="h-4 w-4 ml-4" />
        </span>
      ),
      dataIndex: "id",
      render: (_: any, _record: DataType) => (
        <Link href="/transaction/[id]" as={`/transaction/${_record.id}`}>
          <p className="btn text-sm rounded-none normal-case text-black bg-[#F3F8EA] border border-black hover:border hover:border-black hover:bg-[#F3F8EA] font-semibold">
            View
          </p>
        </Link>
      ),
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <div className="border border-[#D6DDEB] w-full bg-white p-4 rounded-[20px]">
      <div className="w-full md:max-h-20 md:flex justify-between items-center  py-6 ">
        <div className="relative w-full md:w-[30rem]">
          <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
          <input
            type="text"
            placeholder="Search transaction"
            className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
          />
        </div>

        <div className="flex gap-4">
          <button className="p-3 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
            <LuListFilter className="w-4 h-4 inline" /> {"  "}
            Filter
          </button>
        </div>
      </div>

      <div className=" overflow-x-auto ">
        <Table
          columns={columns}
          dataSource={Data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </div>
      <p className="text-[#000]  font-semibold  space-x-3 flex items-center justify-center">
        View all transaction history{" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              d="M16.75 7.72559L1.75 7.72559"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.7002 1.70124L16.7502 7.72524L10.7002 13.7502"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </p>
    </div>
  );
};

export default TransactionTable;
