"use client";
import {
  useGetPermissionsQuery,
  useCreateRoleMutation,
} from "@/services/administrationService";
import React, { FormEventHandler, useState } from "react";
import {
  CustomInput as Input,
  CustomModal,
  CustomSelect as Select,
  CustomButton as Button,
  CustomText as TextArea,
} from "@/lib/AntdComponents";
import { message } from "antd";

const AddRolesModal: React.FC = () => {
  const { data } = useGetPermissionsQuery({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formdata, setFormData] = useState({
    name: "",
    description: "",
    permissions: [] as Array<any>,
  });
  const [createRole, { isLoading }] = useCreateRoleMutation();

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
    if (formdata?.permissions?.length < 1) {
      message.error("at least one permission is required");
      return;
    }
    createRole(formdata)
      .unwrap()
      .then((res) => {
        message.success("role created successfully");
        setIsModalOpen(false);
      })
      .catch((err) => {
        message.error(err?.data?.message || "an error occured");
      });
  };

  return (
    <>
      <button
        type="button"
        className="py-3 px-9 text-white text-sm bg-black rounded-[0.25rem]"
        onClick={showModal}
      >
        Add Custom Role
      </button>

      <CustomModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="py-6">
          <div className="border-b pb-1">
            <h1 className="font-bold text-[#242F57] text-[1.5625rem]">
              Create Custom Role
            </h1>
            <p className="text-[#636E95] text-base">
              This information can be created and edited
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-[#25324B] text-base">
                Name of role
              </label>
              <Input
                id="name"
                type="text"
                required
                name="name"
                value={formdata?.name}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="text-[#25324B] text-base">
                Description
              </label>
              <TextArea
                id="description"
                placeholder="This role will be able to..."
                name="description"
                required
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 resize-y appearance-none bg-transparent outline-none border focus:border-black shadow-sm rounded-lg"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="description" className="text-[#25324B] text-base">
                Permissions
              </label>
              <Select
                mode={"multiple"}
                onDeselect={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    permissions: prev?.permissions.filter(
                      (e: any) => e !== value
                    ),
                  }))
                }
                onSelect={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    permissions: [...prev.permissions, value],
                  }))
                }
                value={formdata?.permissions}
                className="!w-full"
                options={data}
              />
            </div>
            <Button
              htmlType="submit"
              loading={isLoading}
              className="!bg-black !text-white rounded-[0.25rem] w-full py-3 text-base mt-6"
            >
              Submit
            </Button>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default AddRolesModal;
