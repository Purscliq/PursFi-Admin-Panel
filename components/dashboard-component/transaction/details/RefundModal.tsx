"use client";

import React, { useState } from "react";
import { CustomModal } from "@/lib/AntdComponents";

const RefundModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="">
        <button onClick={showModal} className="text-[#0AA07B]">
          Refund Modal Toggle
        </button>
      </div>

      <CustomModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="border-b pb-1 mt-8 flex justify-between text-[#84818A] text-base">
          <h1 className="font-bold text-[#242F57] text-[1.5625rem]  py-1">
            Transfer
          </h1>
          <span>
            <p className="text-xs">Fund Transfer</p>
            <p className="text-[#F6513B] text-[1.1875rem] font-bold">+₦5,000</p>
          </span>
        </div>

        <div className="mt-8 px-6 py-[1.4375rem] rounded-[0.625rem] bg-[#85BC2C0D]">
          <p className="text-[#25324B] text-center text-base font-bold">
            Transaction Summary
          </p>
          <div className="mt-4 space-y-4">
            <span className="flex justify-between">
              <p className="">Account number</p>
              <p className="text-[#25324B] font-bold">7045539220</p>
            </span>
            <span className="flex justify-between">
              <p className="">Account name</p>
              <p className="text-[#25324B] font-bold">Ola Prince</p>
            </span>
            <span className="flex justify-between">
              <p className="">Description</p>
              <p className="text-[#25324B] font-bold">send the raba</p>
            </span>
            <span className="flex justify-between">
              <p className="">Transaction reference</p>
              <p className="text-[#25324B] font-bold">NJU79273399334892HKS</p>
            </span>
            <span className="flex justify-between">
              <p className="">Transaction date</p>
              <p className="text-[#25324B] font-bold">23 March,2022</p>
            </span>
            <span className="flex justify-between">
              <p className="">Previous account balance</p>
              <p className="text-[#25324B] font-bold">₦50,000</p>
            </span>
            <span className="flex justify-between">
              <p className="">Recent account balance</p>
              <p className="text-[#25324B] font-bold">₦55,000</p>
            </span>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="w-full bg-black py-[0.875rem] px-[1.6875rem] rounded-[0.3125rem] text-white font-bold text-lg">
            Refund
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default RefundModal;
