"use client";
import { useEffect, useState } from "react";
import {
  CustomTable as Table,
  CustomDatePicker as DatePicker,
  CustomInput as Input,
  CustomSelect as Select,
} from "@/lib/AntdComponents";
import FilterIcon from "@/assets/svg/FilterIcon";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";

interface DataType {
  name: string;
  issueDate: string;
  dueDate: string;
  amount: string;
  status: string;
}

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Client Name",
    sorter: true,
    dataIndex: "name",
    render: (name) => `${name}`,
    width: "20%",
  },
  {
    title: "Issue Date",
    sorter: true,
    dataIndex: "issueDate",
    render: (issueDate) => `${issueDate}`,
    width: "20%",
  },
  {
    title: "Due Date",
    sorter: true,
    dataIndex: "dueDate",
    render: (dueDate) => `${dueDate}`,
    width: "20%",
  },
  {
    title: "Amount",
    sorter: true,
    dataIndex: "amount",
    render: (amount) => `${amount}`,
    width: "20%",
  },
  {
    title: "Status",
    sorter: true,
    dataIndex: "status",
    render: (type) =>
      type === "Unpaid" ? (
        <span className="p-[4%] rounded-[80px] bg-[#1699F81A]/[10%] text-[#1699F8] text-center text-[14px] font-[600]">
          {type}
        </span>
      ) : (
        <span className="p-[4%] rounded-[80px] bg-[#0AA07B]/[10%] text-[#0AA07B] text-center text-[14px] font-[600]">
          {type}
        </span>
      ),
    width: "20%",
  },
  {
    title: "Action",
    sorter: true,
    dataIndex: "_id",
    render: (id) => `...`,
    width: "20%",
  },
];

const InvoicesTable = () => {
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 5,
    },
  });

  const fetchData = () => {
    setLoading(true);
    fetch(`https://testapi.io/api/sikiru/purscliq-transaction`)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="bg-white flex flex-col gap-[1rem] py-[2%]">
      <div className="flex items-center justify-start w-full gap-[1rem]">
        <DatePicker className="h-max w-max" placeholder="Start" />
        <DatePicker className="h-fit w-fit" placeholder="End" />
        <Select className="w-fit h-fit text-[#899A9A]" defaultValue="">
          <option value="">Type</option>
          <option value="cash">Cash</option>
          <option value="transfer">Transfer</option>
        </Select>
        <div className="w-fit">
          <Input className="h-fit w-fit" placeholder="Amount" />
        </div>
        <div className="flex justify-end w-full cursor-pointer">
          <span className="flex items-center rounded-[5px] border border-[#B8C9C9] p-[1%] justify-self-end self-end">
            <FilterIcon />
            <p className="text-[#202430] text-[16px] font-[500]">filter</p>
          </span>
        </div>
      </div>
      <div className="relative overflow-x-auto  sm:rounded-lg w-full">
        <Table
          columns={columns}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
    </div>
  );
};

export default InvoicesTable;
