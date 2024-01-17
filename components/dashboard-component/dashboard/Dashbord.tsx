import React from "react";

const Dashbord = () => {
  const date = new Date();
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Welcome Hope</h2>
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
          <h1 className="text-xl font-semibold">Total Businesses </h1>
          <p className="text-sm">Total Business in Pursbusiness</p>
          <p className="text-xl font-semibold text-[#25324B]">4,075</p>
        </span>

        <span className="p-4 bg-[#F6513B26]  rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Total Inactive Businesses</h1>
          <p className="text-sm">Total numbers of businesses deactivated </p>
          <p className="text-xl font-semibold text-[#25324B]">30</p>
        </span>

        <span className="p-4  bg-[#3180E726] rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Active Businesses</h1>
          <p className="text-sm text-[#5542F6]">
            Total Active Businesses in Pursbusiness{" "}
          </p>
          <p className="text-xl font-semibold text-[#25324B]">40</p>
        </span>
      </div>
      <div className="grid md:grid-cols-[716px_1fr] grid-cols-1 gap-[35px] h-[445px]">
        <div>chart</div>
        <div>revenue</div>
      </div>
      <div className="w-full"></div>
    </section>
  );
};

export default Dashbord;
