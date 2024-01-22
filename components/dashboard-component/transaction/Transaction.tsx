import React from "react";
// import { CustomSegment as Segmented } from "@/lib/AntdComponents";

const Transaction = () => {
  const date = new Date();
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  md:h-screen overflow-y-scroll">
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
      {/* <div className="grid md:grid-cols-[716px_1fr] grid-cols-1 gap-[35px] h-full p-3">
        <div className="border border-gray-200 p-4 rounded-[20px] md:h-[438px] flex flex-col space-y-4 bg-white">
          <div className="flex  justify-between items-center p-2">
            <span>
              <p className="text-[20px] font-semibold">Account statistics</p>
              <p className="text-sm text-[#7C8493]">
                Showing Account Performance march 19-25
              </p>
            </span>
            <Segmented
              options={["Week", "Month", "Year"]}
            />
          </div>
          <DashboardChart />
        </div>
        <div className="grid grid-cols-1 gap-[9px] h-full">
          <span className="p-3 h-fit border border-gray-200 rounded-[20px] space-y-1 bg-white">
            <h1 className="text-[20px] text-[#25324B]">Revenue </h1>
            <p className="text-sm text-[#7C8493]">Total amount made</p>
            <p className="text-[36px] font-semibold text-[#25324B]">
              ₦80,000,075,300
            </p>
          </span>

          <span className="p-3 h-fit border border-gray-200 rounded-[20px] space-y-1 bg-white">
            <h1 className="text-[20px] text-[#25324B]">Wallet Balance</h1>
            <p className="text-sm text-[#7C8493]">
              Total Amount in Pursbusiness wallet{" "}
            </p>
            <p className="text-[36px] font-semibold text-[#25324B]">
              ₦40,000,075,300
            </p>
          </span>

          <span className="p-3 h-fit border border-gray-200 rounded-[20px] space-y-1 bg-white">
            <h1 className="text-[20px] text-[#25324B]">Income/Profit</h1>
            <p className="text-sm text-[#7C8493]">
              Total Amount in Pursbusiness wallet
            </p>
            <p className="text-[36px] font-semibold text-[#25324B]">
              ₦10,000,075,300
            </p>
          </span>
        </div>
      </div>
      <div className="w-full border border-gray-200 rounded-[20px] space-y-4 bg-white">
        <div className="border-b border-b-gray-200 p-4 flex justify-between items-center">
          <p className="text-[20px]">Admins Activities</p>
          <button className="btn btn-sm text-sm rounded-none normal-case bg-transparent hover:bg-transparent text-[#85BC2C]  border border-gray-200">
            View admins activities
          </button>
        </div>
        <div className="flex space-x-4 items-center p-4 overflow-x-auto w-full overflow-hidden">
          <span className="border border-gray-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_19_2813)">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#25324B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_2813">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <div className="flex flex-col space-y-2 w-full md:w-[351px]">
            <div className="flex justify-between items-center">
              <span>
                <h2 className="text-[#25324B]">Hope Tope</h2>
                <p className="text-[#7C88B1] text-[10px]">
                  Date: Thu Nov 4,2021 9:05AM
                </p>
              </span>
              <p className="px-3 bg-[#F9E1E7] text-[#EB001B] rounded-[40px] text-xs">
                Deactivate Account
              </p>
            </div>
            <div className="border-b border-b-gray-300 w-full" />
            <p className="text-[14px] text-[#25324B]">
              Jame Joseph Bond account as been deativate because he’s a....
              <span className="text-[#85BC2C]">view more</span>
            </p>
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[351px]">
            <div className="flex justify-between items-center">
              <span>
                <h2 className="text-[#25324B]">Hope Tope</h2>
                <p className="text-[#7C88B1] text-[10px]">
                  Date: Thu Nov 4,2021 9:05AM
                </p>
              </span>
              <p className="px-3 bg-[#E6F7EF] text-[#2AD062] rounded-[40px] text-xs">
                Upgrade Account
              </p>
            </div>
            <div className="border-b border-b-gray-300 w-full" />
            <p className="text-[14px] text-[#25324B]">
              Jame joseph bond account as been upgraded.
            </p>
            <p className="px-1 bg-[#E9E8FC] text-[#4640DE] rounded-[40px] text-xs w-fit">
              Tier 2
            </p>
          </div>
          <div className="flex flex-col space-y-2 w-full md:w-[351px]">
            <span>
              <h2 className="text-[#25324B]">Hope Tope</h2>
              <p className="text-[#7C88B1] text-[10px]">
                Date: Thu Nov 4,2021 9:05AM
              </p>
            </span>

            <div className="border-b border-b-gray-300 w-full" />
            <p className="text-[14px] text-[#25324B]">
              Jame Joseph Bond account as been deativate because he’s a....
              <span className="text-[#85BC2C]">view more</span>
            </p>
          </div>
          <span className="border border-gray-300 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_19_2816)">
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#25324B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_19_2816">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
      </div>
      <div className="bg-white p-4">
        <DashboardTable />
      </div> */}
    </section>
  );
};

export default Transaction;
