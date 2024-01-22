import React from "react";
import { GoDotFill } from "react-icons/go";
import { BusinessDetailsData } from "../../content";

const DetailItem = ({ label, value }) => (
  <div>
    <span className="space-y-2">
      <p className="text-[#7C88B1] text-[0.875rem] font-normal">{label}</p>
      <p className="text-base text-[#25324B] leading-normal font-semibold">
        {value}
      </p>
    </span>
  </div>
);

const detailFields = [
  { label: "Business Name", key: "businessname" },
  { label: "Type", key: "type" },
  { label: "Industry", key: "industry" },
  { label: "Full Name", key: "fullname" },
  { label: "Gender", key: "gender" },
  { label: "Phone Number", key: "phonenumber" },
  { label: "Email Address", key: "emailaddress" },
  { label: "House number", key: "houseNumber" },
  { label: "Street Name", key: "streetName" },
  { label: "State", key: "state" },
  { label: "ID Number", key: "idNumber" },
  { label: "BVN", key: "bvn" },
];
interface Iprops {
  id: number;
  businessname: string;
  account: string;
  type: string;
  email: string;
}
const BusinessDetailsTab = ({ data }: { data: Iprops | null }) => {
  return (
    <section>
      <div className="space-y-2 py-6 border-y">
        <span>
          <p className="text-[#25324B] text-[1.1875rem]">Account NO</p>
          <p className="text-[#0AA07B] text-base">1234567890</p>
        </span>
      </div>
      {BusinessDetailsData.map((item, index) => (
        <div
          key={index}
          className="border border-x-transparent py-8 px-4 grid md:gap-6 gap-4 md:grid-cols-3 grid-cols-2"
        >
          {detailFields.map((field) => (
            <DetailItem
              key={field.key}
              label={field.label}
              value={item[field.key]}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default BusinessDetailsTab;
