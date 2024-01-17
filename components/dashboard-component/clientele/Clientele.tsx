import ClienteleTable from "./ClienteleTable";
import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";

const Clientele = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Clientele</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing the list of clientele you have on PursBusiness{" "}
        </p>
      </span>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-[30px] mt-5">
        <span className="p-4 bg-[#0AA07B26] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">No of Clientele</h1>
          <p className="text-sm">Total number of customer in pursbusiness</p>
          <h1 className="text-xl font-semibold">4,075</h1>
        </span>

        <span className="p-4 bg-[#3180E726] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">Active Clientele</h1>
          <p className="text-sm">Total number of active users </p>
          <h1 className="text-xl font-semibold">3000</h1>
        </span>

        <span className="p-4 bg-[#F6513B26] rounded-[1.25rem] space-y-2">
          <h1 className="text-xl font-semibold">Inactive Clientele</h1>
          <p className="text-sm">Total number of user under this age </p>
          <h1 className="text-xl font-semibold">1035</h1>
        </span>
      </div>

      {/* search and filter */}
      <div className="mt-8">
        <div className="w-full md:max-h-24 md:flex justify-between px-8 py-6 bg-white rounded-[1.25rem] border border-[#D6DDEB]">
          <div className="relative w-full md:w-[30rem]">
            <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-3 pl-12 pr-4 border rounded-[0.25rem] outline-none focus:!bg-white focus:border-gray-400"
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

        {/* clientele table */}
        <div className="bg-white rounded-[1.25rem] overflow-x-auto mt-0  p-0 border border-[#D6DDEB]">
          {/* shadow-md */}
          <ClienteleTable />
        </div>
      </div>
    </section>
  );
};

export default Clientele;
