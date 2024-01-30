import React from "react";
import {
  CustomSegment as Segmented,
  CustomDatePicker as DatePicker,
} from "@/lib/AntdComponents";
import TransactionChart from "./TransactionChart";
import { Progress } from "antd";
import TransactionTable from "./TransactionTable";
import TopClient from "./TopClient";
const progressData = [
  { label: "Airtime/ Data", percentage: 80 },
  { label: "Cable TV", percentage: 70 },
  { label: "Salary", percentage: 60 },
  { label: "Transfer", percentage: 55 },
  { label: "Cable TV", percentage: 50 },
  { label: "Cable TV", percentage: 45 },
  { label: "Transfer", percentage: 35 },
  { label: "Cable TV", percentage: 30 },
  { label: "Salary", percentage: 25 },
  { label: "Cable TV", percentage: 20 },
];

// progress item
const ProgressItem = ({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) => (
  <div className="flex gap-x-4 text-[#7C8493]">
    <p className="text-xs">{label}</p>
    <Progress
      percent={percentage}
      showInfo={false}
      size="small"
      strokeColor="#000"
    />
  </div>
);
const Transaction = () => {
  const date = new Date();
  return (
    <section className="max-w-[1640px] flex flex-col bg-[#FAFAFA] p-4 space-y-6  md:h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Transaction</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing your Account metrics for{" "}
          {date.toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </span>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px]">
        <span className="p-4 bg-[#0AA07B26] rounded-[20px] space-y-2">
          <h1 className="text-xl font-semibold">Successful Transactions </h1>
          <p className="text-sm text-[#5542F6]">
            Total number of customer in Gox
          </p>
          <p className="text-xl font-semibold text-[#25324B]">4,075</p>
        </span>

        <span className="p-4 bg-[#F6513B26]  rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Failed Transactions</h1>
          <p className="text-sm text-[#5542F6]">
            Total number of user under this age{" "}
          </p>
          <p className="text-xl font-semibold text-[#25324B]">30</p>
        </span>

        <span className="p-4  bg-[#3180E726] rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Pending Transactions</h1>
          <p className="text-sm text-[#7C8493]">
            Total number of user under this age{" "}
          </p>
          <p className="text-xl font-semibold text-[#25324B]">40</p>
        </span>
      </div>
      <div className="grid lg:grid-cols-[716px_1fr] grid-cols-1 gap-[35px] h-full p-3">
        <div className="border border-gray-200 p-2 rounded-[20px] flex flex-col space-y-2 bg-white">
          <div className="flex  justify-between items-center p-2">
            <span>
              <p className="text-[20px] font-semibold">Total Transactions</p>
              <p className="text-sm text-[#7C8493]">
                Showing Bill payment <br /> Performance may 13th-19th{" "}
              </p>
            </span>
            <DatePicker className="h-fit w-fit" placeholder="may13th-may19th" />

            <Segmented options={["Week", "Month", "Year"]} />
          </div>
          <div className="flex justify-end items-end space-x-2">
            <span className="p-4 bg-[#F6513B26]  rounded-[5px] space-y-2 h-[75px] w-[142px]">
              <p className="text-sm text-gray-400">Failed</p>
              <div className="flex justify-between">
                <p className="font-semibold text-[#25324B]">40</p>
                <p className="text-sm text-[#F6513B]">+21.01%</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15 5.45325L11.4934 9.06158L8.79776 6.57107L3.50693 12.5"
                    stroke="#F7513B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.50684 12.5H6.50684"
                    stroke="#F7513B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.50684 12.5V9.5"
                    stroke="#F7513B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </span>
            <span className="p-4 bg-[#F3F8F9]  rounded-[5px] space-y-2 h-[75px] w-[142px]">
              <p className="text-sm text-gray-400">Sucessful</p>
              <div className="flex justify-between">
                <p className="font-semibold text-[#25324B]">41</p>
                <p className="text-sm text-[#0AA07B]">+23.01%</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M15 5.45325L11.4934 9.06158L8.79776 6.57107L3.50693 12.5"
                    stroke="#0AA07B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.50684 12.5H6.50684"
                    stroke="#0AA07B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.50684 12.5V9.5"
                    stroke="#0AA07B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </span>
          </div>
          <TransactionChart />
        </div>
        <div className="grid grid-cols-1 gap-[8px] h-full bg-white border border-gray-200 rounded-[20px] p-3">
          {progressData.map((data, index) => (
            <ProgressItem key={index} {...data} />
          ))}
          <p className="text-[#000] p-2 text-center font-semibold">View more</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-[716px_1fr] grid-cols-1 gap-[35px] h-[484px] p-3">
        <TransactionTable />
        <TopClient />
      </div>
    </section>
  );
};
export default Transaction;
