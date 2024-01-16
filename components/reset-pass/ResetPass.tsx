"use client";
import logo from "@/assets/logo.svg";
import {
  CustomPasswordInput as PasswordInput,
  CustomButton as Button,
} from "@/lib/AntdComponents";
// import { message, Alert } from "antd";
import Image from "next/image";

const ResetPass = () => {
  return (
    <div className="min-h-screen flex flex-col  max-w-[1640px] bg-[#FAFAFA]">
      <div className=" mx-auto w-full p-3">
        <nav className="py-4 px-8">
          <Image src={logo} alt="logo" />
        </nav>
        <main className=" flex flex-col items-center justify-center bg-white w-full md:w-[559px] mx-auto mt-4 p-6">
          {/* {alert && <Alert type="error" closable message={alert} />} */}
          <h1 className="font-semibold text-[28px] mb-2 text-black">
            Change Password{" "}
          </h1>
          <p className=" text-gray-700 text-[18px] text-center">
            Your new password must be different from previous used passwords
          </p>
          <form className="w-full space-y-5 mt-8">
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="password"
                className="text-[#181336] text-sm font-[500]"
              >
                Password
              </label>
              <PasswordInput
                className="w-full"
                placeholder=" Enter your password"
                id="password"
                type="password"
                name="newPassword"
              />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
              <label
                htmlFor="confirmPassword"
                className="text-[#181336] text-sm font-[500]"
              >
                Confirm password
              </label>
              <PasswordInput
                className="w-full"
                placeholder="Confirm your password"
                id="confirmPassword"
                type="password"
                name="confirmPassword"
              />
            </div>
            <Button
              htmlType="submit"
              type="primary"
              className="!h-[3rem] !bg-black w-full !text-white"
            >
              Change Password{" "}
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default ResetPass;
