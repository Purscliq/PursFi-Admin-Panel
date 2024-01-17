import { CiSearch } from "react-icons/ci";
import { LuListFilter } from "react-icons/lu";

const SearchAndFilter = () => {
  return (
    <div className="w-full md:max-h-24 md:flex justify-between px-8 py-6 bg-white rounded-2xl border border-[#D6DDEB]">
      <div className="relative w-full md:w-[30rem]">
        <CiSearch className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3" />
        <input
          type="text"
          placeholder="Search"
          className="w-full py-3 pl-12 pr-4 border rounded-md outline-none focus:bg-white focus:border-gray-400"
        />
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <button className="p-4 md:py-0 text-sm rounded-md border border-[#D6DDEB]">
          <LuListFilter className="w-4 h-4 inline" /> {"  "}
          Filter
        </button>

        <button className="p-4 md:py-0 text-white text-sm bg-black rounded-sm">
          Export csv
        </button>
      </div>
    </div>
  );
};

export default SearchAndFilter;
