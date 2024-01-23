"use client";

import React, { useState } from "react";
import { CustomModal } from "@/lib/AntdComponents";

const DeactivateAccountModal: React.FC = () => {
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
      <button
        type="button"
        className="btn btn-ghost hover:bg-transparent p-0"
        onClick={showModal}
      >
        <label
          htmlFor="DeactivateAccount"
          title="Deactivate Account"
          className="relative h-8 w-14 cursor-pointer [-webkit-tap-highlight-color:_transparent]"
        >
          <input
            title="Checked"
            type="checkbox"
            id="DeactivateAccount"
            // defaultChecked
            className="peer sr-only [&:checked_+_span_svg[data-checked-icon]]:block [&:checked_+_span_svg[data-unchecked-icon]]:hidden"
          />

          <span className="absolute inset-y-0 start-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition-all peer-checked:start-6 peer-checked:text-green-600"></span>

          <span className="absolute inset-0 rounded-full peer-checked:bg-[#E93C3C] transition bg-green-500"></span>
        </label>
      </button>

      <CustomModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="border-b pb-1">
          <h1 className="font-bold text-[#242F57] text-[1.5625rem]">
            Account Deactivation
          </h1>
          <p className="text-[#636E95] text-base">
            Deactivating this account will disable the business from using it
          </p>
        </div>
        <div className="mt-8">
          <label htmlFor="reason" className="text-[#25324B] text-base">
            Give reason
          </label>
          <textarea
            id="reason"
            required
            className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
          ></textarea>
          <p className="text-[#F6513B] text-center">
            Are you sure you want to deactivate this account?
          </p>
        </div>
      </CustomModal>
    </>
  );
};

export default DeactivateAccountModal;
