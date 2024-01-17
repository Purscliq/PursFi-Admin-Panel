import Link from "next/link";
import React from "react";
import { GoArrowLeft } from "react-icons/go";

const Details = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <span>
        <span className="flex gap-2">
          <Link href="/clientele" className="py-1" title="Back to Clientele">
            <GoArrowLeft className="w-8 h-8" /> {""}
          </Link>
          <h2 className="text-[25px] font-bold mb-1">
            Clientele -{" "}
            <span className="font-normal text-lg text-[#7C8493]">
              APP-202006060640-7038
            </span>
          </h2>
        </span>
        <p className="text-[16px] text-[#7C8493]">
          Showing the list of clientele you have on PursBusiness{" "}
        </p>
      </span>
    </section>
  );
};

export default Details;
