"use client";
import React, { useState } from "react";
import AddRolesModal from "../AddRolesModal";
import { useGetRolesQuery } from "@/services/administrationService";
import EditRolesModal from "../EditRolesModal";

const RolesTab = () => {
  const { data, isLoading } = useGetRolesQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role, setRole] = useState<Record<string, any>>({});
  return (
    <>
      <section className="bg-white py-4 px-2 space-y-4">
        <div className="pt-2 pb-4 border-b lg:flex justify-between space-y-2 lg:space-y-0">
          <span>
            <p className="text-[1.1875rem] text-[#25324B]">Manage Roles</p>
            <p className="text-[#515B6F]">
              This is notifications preferences that you can update anytime.
            </p>
          </span>
          <AddRolesModal />
        </div>

        <div className="lg:flex gap-8 py-2 space-y-4 lg:space-y-0">
          <div className="flex-none">
            <p className="text-[#25324B]">Default Role</p>
            <p className="text-[#515B6F] lg:max-w-[15rem]">
              Customize your preferred notification settings
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-4">
            {data?.map((e: Record<string, any>, i: any) => (
              <div
                key={i}
                className="rounded-[0.625rem] border border-[#D6DDEB] px-5 py-[1.1875rem] space-y-2 lg:space-y-0 lg:flex justify-between"
              >
                <span className="">
                  <p className="text-[#25324B] capitalize">{e?.name}</p>
                  <p className="text-[#515B6F]">
                    Customize your preferred notification settings
                  </p>
                </span>
                <button
                  onClick={() => {
                    setRole(e);
                    setIsModalOpen(true);
                  }}
                  className="py-2 px-4 border text-sm border-[#CCCCF5] hover:border-black hover:text-black bg-white text-[#8F9197]"
                >
                  View Pemission
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EditRolesModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        role={role}
      />
    </>
  );
};

export default RolesTab;
