import { Progress } from "antd";
import Link from "next/link";
import React from "react";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { LuListFilter } from "react-icons/lu";
import RefundModal from "./RefundModal";
import TransactionSummaryModal from "./TransactionSummaryModal";
// transactions
const transactions = [
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "failed", status: "Failed", time: "Today 11:32:40pm" },
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "failed", status: "Failed", time: "Today 11:32:40pm" },
];
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
// transaction item
const TransactionItem = ({
  type,
  status,
  time,
}: {
  type: string;
  status: string;
  time: string;
}) => (
  <div className="flex justify-between">
    <span className="flex gap-4">
      <span
        className={`bg-[#EDEFF2] rounded-full p-4 ${
          type === "success" ? "text-[#2AC769]" : "text-[#ED342B]"
        }`}
      >
        {type === "success" ? (
          <AiOutlineRise className="h-5 w-5" />
        ) : (
          <AiOutlineFall className="h-5 w-5" />
        )}
      </span>
      <span className="space-y-2">
        <p className="text-[#242F57] font-semibold">GOtv Subscription</p>
        <p className="text-[#636E95] text-sm">
          {/* {type === "success" ? "Cable TV" : ""} */}
          Cable TV
        </p>
      </span>
    </span>
    <span className="text-right">
      <p
        className={`font-semibold ${
          type === "success" ? "text-[#2AC769]" : "text-[#ED342B]"
        }`}
      >
        {status}
      </p>
      <p className="text-[#636E95]">{time}</p>
    </span>
  </div>
);

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
      strokeColor="#0AA07B"
    />
  </div>
);
const TransactionDetails = () => {
  return (
    <section className="max-w-[1640px] flex flex-col bg-white p-4 space-y-4 md:h-screen overflow-y-scroll">
      <span className="flex gap-2 border-b border-b-gray-100">
        <Link href="/transaction" className="py-2" title="Back to Clientele">
          <GoArrowLeft className="w-8 h-8" /> {""}
        </Link>
        <h2 className="text-[34px]  mb-1 leading-none md:leading-[3rem]">
          Transaction Details
        </h2>
      </span>

      <div className="space-y-2 py-6 border-y">
        <span>
          <p className="text-[#25324B] text-[1.1875rem]">
            Pursbusiness Limited
          </p>
          <p className="text-[#0AA07B] text-base">1234567890</p>
        </span>
      </div>
      <div className="mt-10 grid  grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        {/* 01 */}
        <div className="rounded-[20px] border border-gray-200">
          <div className="md:flex justify-between  p-3 border-b">
            {/* search bar */}
            <div className="relative w-full lg:w-[19rem]">
              <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none bg-white focus:bg-white focus:border-gray-400"
              />
            </div>
            {/* end of search bar */}
            {/* filter */}
            <button className="p-4 md:py-0 mt-4 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
              <LuListFilter className="w-4 h-4 inline" /> {"  "}
              Filter
            </button>
            {/* end of filter */}
          </div>

          <div className="px-3 space-y-4">
            {transactions.map((transaction, index) => (
              <TransactionItem key={index} {...transaction} />
            ))}

            {/* transaction summary modal */}
            <TransactionSummaryModal />

            {/* refund modal */}
            <RefundModal />

            <div className="text-center">
              <button className="text-[#85BC2C] text-base font-normal">
                View all Transaction history
                <GoArrowRight className="w-6 h-6 inline ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="rounded-[20px] border border-gray-200">
          <div className="md:flex justify-between mt-4 mb-8 border-b px-3 pb-3">
            {/* search bar */}
            <p className="font-normal text-[1.1875rem] py-2">
              Frequent bill sevices
            </p>
            <button className="p-4 md:py-0 text-sm rounded-[0.25rem] border border-[#D6DDEB]">
              <LuListFilter className="w-4 h-4 inline" /> {"  "}
              Filter
            </button>
          </div>

          <div className="space-y-4 px-3">
            {progressData.map((data, index) => (
              <ProgressItem key={index} {...data} />
            ))}

            <div className="text-center">
              <button className="text-[#0AA07B]">View more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransactionDetails;
