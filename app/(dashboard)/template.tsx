"use client";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useGetUserQuery } from "@/services/authService";
import Image from "next/image";
import React, { useLayoutEffect } from "react";
import logo from "@/assets/logo.svg";

const template = ({ children }: { children: React.ReactNode }) => {
  useLayoutEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
  }, []);
  const { isLoading, isUninitialized } = useGetUserQuery({});
  return (
    <>
      {isLoading || isUninitialized ? (
        <div className="relative h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="fixed top-0 left-0 px-6 py-4">
            <Image src={logo} alt="logo" className="w-28 h-28" />
          </div>
          <div className="fixed inset-0 bg-black opacity-50 z-50" />
          <div className="w-16 h-16 border-t-4 border-black border-solid rounded-full animate-spin z-50" />
        </div>
      ) : (
        <DashboardLayout>{children}</DashboardLayout>
      )}
    </>
  );
};

export default template;
