"use client";
import { useEffect, useState } from "react";
import {
  CustomTable as Table,
  // CustomInput as Input,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { AdminTableData } from "../content";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
import AddAdminModal from "./AddAdminModal";
import {
  useGetMembersQuery,
  useLazyGetMembersQuery,
} from "@/services/administrationService";

interface DataType {
  id: number;
  fullName: string;
  roles: string;
  lastActive: string;
  status: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const PayrollTable = () => {
  const [getMembers, { data, isLoading }] = useLazyGetMembersQuery();
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      sorter: false,
      dataIndex: "id",
      render: (id) => `${id}`,
      width: "5%",
    },
    {
      title: "Full Name",
      sorter: true,
      dataIndex: "name",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: "Roles",
      sorter: true,
      dataIndex: "roles",
      render: (roles) => <p className="capitalize">{roles[0]?.name}</p>,
      width: "20%",
    },

    {
      title: "Last Active",
      sorter: true,
      dataIndex: "last_active",
      render: (lastActive) =>
        `${new Date(lastActive).toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}`,
      width: "20%",
    },
    {
      title: "Status",
      sorter: true,
      dataIndex: "status",
      // render: (status) => `${status}`,
      render: (status) => (
        <p
          className={`text-black ${
            status === "active" ? "bg-[#2AD0621A]" : ""
          } rounded-[5rem] py-[0.375rem] px-[0.625rem] w-max text-sm`}
        >
          {status}
        </p>
      ),
      width: "20%",
    },
    {
      title: <span className=""></span>,
      render: () => (
        <button type="button">
          <p className="btn text-sm rounded-none normal-case text-[#8F9197] bg-white border border-[#CCCCF5] hover:text-black hover:border hover:border-black hover:bg-white/90 font-bold">
            <FiEdit className="w-4 h-4" />
            Change role
          </p>
        </button>
      ),
    },
  ];

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams((prev) => ({
      ...prev,
      pagination,
    }));
  };

  useEffect(() => {
    getMembers({ page: tableParams?.pagination?.current, type: "admin" })
      .unwrap()
      .then((res) => {
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams?.pagination,
            total: res?.data.total,
          },
        });
      });
  }, []);

  return (
    <div className="mt-8">
      <div className="w-full md:max-h-24 md:flex justify-between px-8 py-6 bg-white">
        <div>
          <h1 className="text-[20px] text-[#25324B] py-2">10 Admins</h1>
        </div>
        <div className="md:flex gap-2">
          <div className="relative w-full md:w-[19rem]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input
              type="text"
              placeholder="Search Admins"
              className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
            />
          </div>

          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="p-4 md:py-0 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
              <LuListFilter className="w-4 h-4 inline" /> {"  "}
              Filter
            </button>

            <AddAdminModal />
          </div>
        </div>
      </div>

      {/* Payment table */}
      <div className="bg-white overflow-x-auto  p-2">
        <Table
          columns={columns}
          dataSource={data?.data?.data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default PayrollTable;
