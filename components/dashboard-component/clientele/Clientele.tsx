import React from "react";
import SearchAndFilter from "./SearchAndFilter";
import ClienteleTable from "./ClienteleTable";

const Clientele = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Clientele</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing the list of clientele you have on PursBusiness{" "}
        </p>
      </span>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-8">
        <span className="p-4 bg-[#0AA07B26] rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">No of Clientele</h1>
          <p className="text-sm">Total number of customer in pursbusiness</p>
          <h1 className="text-xl font-semibold">4,075</h1>
        </span>

        <span className="p-4 bg-[#3180E726] rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Active Clientele</h1>
          <p className="text-sm">Total number of active users </p>
          <h1 className="text-xl font-semibold">3000</h1>
        </span>

        <span className="p-4 bg-[#F6513B26] rounded-3xl space-y-2">
          <h1 className="text-xl font-semibold">Inactive Clientele</h1>
          <p className="text-sm">Total number of user under this age </p>
          <h1 className="text-xl font-semibold">1035</h1>
        </span>
      </div>

      {/* search and filter */}
      <div className="mt-8">
        <SearchAndFilter />

        {/* clientele table */}
        <div className="bg-white rounded-2xl overflow-x-auto mt-0  p-0 border border-[#D6DDEB]">
          {/* shadow-md */}
          <ClienteleTable />
        </div>
      </div>
    </section>
  );
};

export default Clientele;
