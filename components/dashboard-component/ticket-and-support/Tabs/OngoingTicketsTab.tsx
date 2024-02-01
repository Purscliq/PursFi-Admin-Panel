import React from "react";
import Image from "next/image";
import Avatar from "../../../../assets/png/People.png";

const OngoingTicketsTab = () => {
  return (
    <section className="bg-white py-4 px-2 space-y-4">
      <div className="pt-2 pb-4 flex flex-col space-y-2 lg:space-y-4">
        <div className="rounded-[0.625rem] border border-[#D6DDEB] px-5 py-[1.1875rem] space-y-2 lg:space-y-4">
          <div className="flex justify-between gap-4">
            <span className="flex gap-2">
              <div className="bg-[#F8A53499] p-2 rounded-full w-5 h-5 my-1" />
              <p className="font-bold text-lg">Ticket# 2023-CS123</p>
            </span>
            <p className="font-normal text-sm">Posted at 12:45 AM</p>
          </div>

          <div className="space-y-2 border-b pb-2">
            <p className="text-[#25324B] font-medium">
              How to deposit money to my portal?
            </p>
            <p className="text-[#515B6F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex justify-between gap-4 space-y-2 lg:space-y-0">
            <span className="flex gap-2">
              <Image src={Avatar} alt="Avatar" />
              <p>John Snow</p>
            </span>
            <button className="text-base hover:text-black bg-white text-[#0D24F1]">
              Open Ticket
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OngoingTicketsTab;
