"use client";
import { CustomModal, CustomInput as Input } from "@/lib/AntdComponents";
interface ChargeModalProps {
  isModalOpen: boolean;
  onclose: () => void;
}

const ChargeModal: React.FC<ChargeModalProps> = ({ isModalOpen, onclose }) => {
  return (
    <CustomModal
      open={isModalOpen}
      onCancel={onclose}
      footer={null}
      centered={true}
    >
      <div className="border-b pb-4 mt-5 text-[#84818A] text-base px-3">
        <h1 className="font-bold text-[#242F57] text-[1.5625rem]  py-1">
          Modify Charges
        </h1>
        <p className="text-[16px] text-[#636E95]">
          This information can be created and edited
        </p>
      </div>

      <div className="flex flex-col space-y-3 mt-5 px-3">
        <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
          <label htmlFor="vendor" className="text-[#181336] text-sm font-[500]">
            Vendor's Name
          </label>
          <Input
            className="w-full "
            placeholder="vendor's name"
            id="vendor"
            type="text"
            name="vendor"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
          <label htmlFor="amount" className="text-[#181336] text-sm font-[500]">
            Amount
          </label>
          <Input
            className="w-full "
            placeholder="amount"
            id="amount"
            type="number"
            name="amount"
            required
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-[0.2rem]">
          <label htmlFor="vat" className="text-[#181336] text-sm font-[500]">
            VAT{" "}
          </label>
          <Input
            className="w-full "
            placeholder="Vat"
            id="vat"
            type="vat"
            name="vat"
            required
          />
        </div>
      </div>
      <button className="w-full mt-5 bg-black py-[0.870rem] px-[1.6865rem] rounded-[0.3125rem] text-white font-semibold text-lg">
        Update
      </button>
    </CustomModal>
  );
};

export default ChargeModal;
