import React, { useState } from "react";
import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

const Details = () => {
  return (
    <section className="max-w-[1640px] bg-white flex flex-col p-4  h-screen overflow-y-scroll">
      <div className="md:flex justify-between border-b pb-4">
        <span className="flex gap-2">
          <Link href="/payment" className="py-2" title="Back to Payments">
            <GoArrowLeft className="w-8 h-8" /> {""}
          </Link>
          <h2 className="text-[2.25rem] font-bold mb-1 leading-none md:leading-[3rem]">
            Payment
          </h2>
        </span>
      </div>

      {/* details */}
      <section>
        <div className="border-y mt-4 py-8 px-4 grid md:gap-6 gap-4 md:grid-cols-3 grid-cols-2">
          {/* Hardcoded data*/}
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Bank Name
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                First Name
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">Fee</p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                0.00
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Amount
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                NGN 200,000.00
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">Date</p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                24 July 2024
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Source
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Pursbusiness
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                CounterParty
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                John David Doe
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Account Number
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                01828372892
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Payment Tag
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Entertainment
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Payment ID
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Pay26663772727
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Payment approved by
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Ayomide
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Created by
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Admin Temitope
              </p>
            </span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Details;
