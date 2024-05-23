"use client";
import { useState } from "react";
import ChargeTable from "./ChargeTable";
import ChargeModal from "./ChargeModal";

const Charge = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
        <div className="flex justify-between items-center px-3">
          <h2 className="text-[25px] font-bold mb-1"> Charges</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-md   text-white text-sm bg-black hover:bg-black font-normal rounded-[0.25rem]"
          >
            Create Charges
          </button>
        </div>

        <ChargeTable />
      </section>
      <ChargeModal
        isModalOpen={isModalOpen}
        onclose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Charge;
