"use client";
import { useState } from "react";
import {
  CustomTable as Table,
  // CustomInput as Input,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { RefundTableData } from "../clientele/content";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import Link from "next/link";

interface DataType {
  id: number;
  transID: string;
  title: string;
  type: string;
  refundDate: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const RefundTable = () => {
  const [Refunddata, setRefunddata] = useState<DataType[]>(RefundTableData);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "Transaction ID",
      sorter: true,
      dataIndex: "transID",
      render: (transID) => `${transID}`,
      width: "20%",
    },
    {
      title: "Title",
      sorter: true,
      dataIndex: "title",
      render: (title) => `${title}`,
      width: "20%",
    },

    {
      title: "Type",
      sorter: true,
      dataIndex: "type",
      render: (type) => `${type}`,
      width: "20%",
    },
    {
      title: "Refund Date",
      sorter: true,
      dataIndex: "refundDate",
      render: (refundDate) => `${refundDate}`,
      width: "20%",
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
        <Link href="/refund-details/[id]" as={`/refund-details/${_record.id}`}>
          <p className="btn text-sm rounded-none normal-case text-black bg-[#F3F8EA] border border-black hover:border hover:border-black hover:bg-[#F3F8EA] font-semibold">
            View Details
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
      setRefunddata([]);
    }
  };
  return (
    <div className="mt-8">
      <div className="w-full md:max-h-24 md:flex justify-between px-8 py-6 bg-white rounded-[1.25rem] border border-[#D6DDEB]">
        <div className="relative w-full md:w-[30rem]">
          <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
          />
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="p-4 md:py-0 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
            <LuListFilter className="w-4 h-4 inline" /> {"  "}
            Filter
          </button>

          <button className="p-4 md:py-0 text-white text-sm bg-black rounded-[0.25rem]">
            Export csv
          </button>
        </div>
      </div>

      {/* Payment table */}
      <div className="bg-white rounded-[1.25rem] overflow-x-auto mt-4  p-0 border border-[#D6DDEB]">
        <Table
          columns={columns}
          dataSource={Refunddata}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default RefundTable;
