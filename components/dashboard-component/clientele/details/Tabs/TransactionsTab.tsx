import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";

// transactions
const transactions = [
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "failed", status: "Failed", time: "Today 11:32:40pm" },
  { type: "success", status: "+₦5,000", time: "Today 11:32:40pm" },
  { type: "failed", status: "Failed", time: "Today 11:32:40pm" },
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

// progress data
const progressData = [
  { label: "Airtime/ Data", percentage: 80 },
  { label: "Cable TV", percentage: 70 },
  { label: "Cable TV", percentage: 60 },
  { label: "Cable TV", percentage: 55 },
  { label: "Cable TV", percentage: 50 },
  { label: "Cable TV", percentage: 45 },
  { label: "Cable TV", percentage: 40 },
  { label: "Cable TV", percentage: 30 },
  { label: "Cable TV", percentage: 25 },
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
  <div className="flex justify-between gap-8 text-[#7C8493]">
    <p className="text-xs">{label}</p>
    <div className="my-1 bg-[#85BC2C4D] w-3/4 rounded-full h-1.5">
      <div
        className={`bg-[#0AA07B] h-1.5 w-[${percentage}%] rounded-full`}
      ></div>
    </div>
  </div>
);

const TransactionsTab = () => {
  return (
    <section className="py-8 px-4">
      <div className="px-4  border-b">
        <p className="font-medium text-[1.1875rem]">Transactions</p>
        <p className="text-[#7C8493]">
          This information can not be created and edited
        </p>
      </div>

      <div className="px-4">
        <div className="px-6">
          <h1 className="text-[1.1875rem] mt-4 text-[#2E2E3A] leading-normal font-normal">
            Wallet Balance
          </h1>
          <h1 className="text-[2.25rem] text-[#2AD062] leading-normal font-bold">
            ₦36,000,075,300
          </h1>
        </div>

        <div className="mt-10 lg:flex space-y-6 lg:space-y-0 gap-8 border-b pb-6">
          {/* 01 */}
          <div className="lg:w-1/2 border px-0 py-3 rounded-lg">
            <div className="md:flex space-y-4 md:space-y-0 justify-between mt-4 mb-8 pb-3 px-3 border-b">
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
              <div className="text-center">
                <button className="text-[#85BC2C] text-base font-normal">
                  View all Transaction history
                  <GoArrowRight className="w-6 h-6 inline ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* 02 */}
          <div className=" lg:w-1/2 w-full border py-3 rounded-lg">
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
      </div>
    </section>
  );
};

export default TransactionsTab;
