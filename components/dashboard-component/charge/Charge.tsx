"use client";
import ChargeTable from "./ChargeTable";

const Charge = () => {

  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-[25px] font-bold mb-1"> Charges</h2>
        <button
          className="btn btn-md   text-white text-sm bg-black hover:bg-black font-normal rounded-[0.25rem]"
        >
          Create Charges
        </button>
      </div>

      <ChargeTable />
    </section>
  );
};

export default Charge;
