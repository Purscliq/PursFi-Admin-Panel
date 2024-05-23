"use client";
import React, { FormEventHandler, useState, useEffect } from "react";
import {
  CustomInput as Input,
  CustomModal as Modal,
  CustomSelect as Select,
  CustomButton as Button,
} from "@/lib/AntdComponents";
import {
  useGetRolesQuery,
  useUpdateMemberRoleMutation,
} from "@/services/administrationService";
import { message } from "antd";

const EditMembersModal = ({
  member,
  isModalOpen,
  setIsModalOpen,
}: {
  member: Record<string, any>;
  isModalOpen: boolean;
  setIsModalOpen: any;
}) => {
  const [formdata, setFormData] = useState({
    role: "",
  });
  useEffect(() => {
    if (member?.id) setFormData({ role: member?.roles[0]?.name });
  }, [member?.id]);
  const { data } = useGetRolesQuery({});
  const [updateMember, { isLoading }] = useUpdateMemberRoleMutation();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (!formdata?.role) {
      message.error("role is required");
      return;
    }
    updateMember({ body: formdata, id: member?.id })
      .unwrap()
      .then((res) => {
        message.success("member created successfully");
        setIsModalOpen(false);
      })
      .catch((err) => {
        message.error(err?.data?.message || "an error occured");
      });
  };

  return (
    <Modal
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <div className="py-6">
        <div className="border-b pb-1">
          <h1 className="font-bold text-[#242F57] text-[1.5625rem]">
            Create User
          </h1>
          <p className="text-[#636E95] text-base">
            This information can be created and edited
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-1">
            <label htmlFor="name" className="text-[#25324B] text-base">
              Name
            </label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              disabled
              value={member?.name}
              className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-[#25324B] text-base">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="user@gmail.com"
              disabled
              value={member?.email}
              className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="reason" className="text-[#25324B] text-base">
              Select Role
            </label>
            <Select
              onSelect={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  role: value,
                }))
              }
              value={formdata?.role}
              className="!w-full"
              options={data}
            />
          </div>
          <Button
            htmlType="submit"
            type="primary"
            className="!bg-black !text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
          >
            Submit
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default EditMembersModal;
