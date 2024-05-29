"use client";
import { useRouter } from "next/navigation";
import { GoArrowLeft } from "react-icons/go";
import { useLazyGetPayrollByIdQuery } from "@/services/payrollService";
import { useEffect,useState } from "react";

const Details = ({id}:{id:string}) => {
  const {back} = useRouter()
  const [getPayrollById,{isLoading,isUninitialized,data}] = useLazyGetPayrollByIdQuery()
  useEffect(()=>{
    if(id) getPayrollById(id)
  },[id])


  return (
    <>
    {(isLoading || isUninitialized)?
      <div className="flex items-center justify-center h-full"><span className="loading loading-spinner loading-lg bg-black"></span></div>:
    <section className="max-w-[1640px] bg-white flex flex-col p-4  h-screen overflow-y-scroll">
      <div className="md:flex justify-between border-b pb-4">
        <span className="flex gap-2 items-center">
            <GoArrowLeft onClick={back} className="w-8 h-8 cursor-pointer" /> {""}
          <h2 className="text-[2.25rem] font-bold mb-1 leading-none md:leading-[3rem]">
            Payroll
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
                Payroll Name
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                {data?.data?.name}
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Payroll ID
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                {data?.data?.id}
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Amount
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                NGN {data?.data?.salaries}
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">Date</p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                {new Date(data?.data?.payout_date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "2-digit",
                    year: "numeric",
                  })}
              </p>
            </span>
          </div>
          {/* <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Business Name
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                Volt -wolf
              </p>
            </span>
          </div> */}
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Members
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
                {data?.data?.members}
              </p>
            </span>
          </div>
          <div>
            <span className="space-y-2">
              <p className="text-[#7C88B1] text-[0.875rem] font-normal">
                Type
              </p>
              <p className="text-base text-[#25324B] leading-normal font-semibold">
               {data?.data?.type}
              </p>
            </span>
          </div>
        </div>
      </section>
    </section>}
    </>
  );
};

export default Details;
