"use client";
import { message, SelectProps } from "antd";
import {
  CustomSelect as Select,
  CustomPasswordInput as PasswordInput,
  CustomInput as Input,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import { useChangePasswordMutation } from "@/services/authService";
import { FormEventHandler, useState } from "react";
import { useAppSelector } from "@/store/hooks";
const Profile = () => {
  const [formdata, setFormData] = useState({
    old_password: "",
    password: "",
    password_confirmation: "",
  });
  const profile = useAppSelector((store) => store.user.user);
  const [updatePassword, { isLoading }] = useChangePasswordMutation();
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    updatePassword(formdata)
      .unwrap()
      .then((res) => {
        message.success("profile updated successfully");
        setFormData({
          old_password: "",
          password: "",
          password_confirmation: "",
        });
      })
      .catch((err) => {
        message.error(err?.response?.message || "an errror ocurred");
      });
  };
  return (
    <div className="flex flex-col py-4 w-full space-y-3">
      <span>
        <h1 className="font-semibold">Personal Information </h1>
        <p className="text-gray-600 text-sm">
          This is Company information that you can update anytime.
        </p>
      </span>
      <div className=" w-full rounded-md">
        {/* First Name Section */}
        <div className="mb-4 p-2 grid grid-cols-[400px,1fr] gap-6 items-start">
          <div className="text-sm flex-col flex">
            <h1 className="font-semibold">Personal Details</h1>{" "}
          </div>
          <div className="space-y-3 flex flex-col  w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Full Name
              </label>
              <Input
                type="text"
                id="firstName"
                placeholder="Full Name"
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={profile?.user?.name}
                disabled
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Email
              </label>
              <Input
                type="text"
                id="lastName"
                placeholder="Email Address"
                className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={profile?.user?.email}
                disabled
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Roles and Permission
              </label>
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%", height: "40px" }}
                placeholder="Please select"
                value={profile?.roles?.map((e: any) => e?.name)}
                disabled
              />
            </div>
          </div>
        </div>
        <hr />
        {/* pass Section */}
        <form
          onSubmit={handleSubmit}
          className="mb-4 p-2 grid grid-cols-[400px,1fr] gap-6 items-start"
        >
          <div className="text-sm flex-col flex justify-start items-start">
            <h1 className="font-semibold">New Password</h1>{" "}
            <span className="text-sm mt-2">
              Manage your password to make sure it is safe{" "}
            </span>
          </div>
          <div className="space-y-3 flex flex-col  w-full md:w-[400px]">
            <div className="w-full space-y-1">
              <label htmlFor="password" className="font-semibold text-sm">
                Old Password
              </label>
              <PasswordInput
                type="password"
                name="old_password"
                className="  w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={formdata?.old_password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                New Password
              </label>
              <PasswordInput
                type="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={formdata?.password}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="w-full  space-y-1">
              <label htmlFor="firstName" className="font-semibold text-sm">
                Confirm Password
              </label>
              <PasswordInput
                type="password"
                name="password_confirmation"
                className="w-full px-3 py-2 border border-gray-300 text-gray-800 placeholder-text-gray-900 text-sm rounded-md focus:outline-none"
                value={formdata?.password_confirmation}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="flex justify-center mx-auto items-end my-3">
              <Button
                type="primary"
                className="btn w-[400px] !bg-black hover:bg-black text-white"
                htmlType="submit"
                loading={isLoading}
              >
                Update Password
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
