"use client";
import { useState, useEffect } from "react";
import {
  CustomTable as Table,
  // CustomInput as Input,
} from "@/lib/AntdComponents";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import { FiEdit } from "react-icons/fi";
import AddMembersModal from "./AddMembersModal";
import { useLazyGetMembersQuery } from "@/services/administrationService";
import EditMembersModal from "./EditMembersModal";

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

const RolesAndPermissionsTable = () => {
  const [getMembers, { data, isLoading }] = useLazyGetMembersQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [member, setMember] = useState<Record<string, any>>({});
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
      render: (id, _, index) => `${index + 1}`,
      width: "5%",
    },
    {
      title: "Full Name",
      sorter: true,
      dataIndex: "name",
      render: (name) => <p className="capitalize">{name}</p>,
      width: "20%",
    },
    {
      title: "Email",
      sorter: true,
      dataIndex: "email",
      render: (email) => <p className="">{email}</p>,
      width: "20%",
    },

    {
      title: "Last Active",
      sorter: true,
      dataIndex: "last_active",
      render: (lastActive) =>
        `${
          lastActive
            ? new Date(lastActive).toLocaleString("en-US", {
                month: "short",
                day: "2-digit",
                year: "numeric",
              })
            : "N/A"
        }`,
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
      render: (_, member) => (
        <button
          onClick={() => {
            setMember(member);
            setIsModalOpen(true);
          }}
          type="button"
        >
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
    getMembers({ page: tableParams?.pagination?.current })
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
    <>
      <div className="mt-8">
        <div className="w-full md:max-h-24 md:flex justify-between px-8 py-6 bg-white">
          <div>
            <h1 className="text-[20px] text-[#25324B] py-2">
              {`${Number(data?.data?.total || 0).toLocaleString(
                "en-US"
              )} Member(s)`}
            </h1>
          </div>
          <div className="md:flex gap-2">
            <div className="relative w-full md:w-[19rem]">
              <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
              <input
                type="text"
                placeholder="Search Members"
                className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-transaparent focus:border-gray-400"
              />
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <button className="p-4 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
                <LuListFilter className="w-4 h-4 inline" /> {"  "}
                Filter
              </button>

              <AddMembersModal />
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
      <EditMembersModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        member={member}
      />
    </>
  );
};

export default RolesAndPermissionsTable;
