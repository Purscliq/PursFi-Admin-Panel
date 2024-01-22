import React from "react";

const BusinessDetailsTab = () => {
  return (
    <section>
      <div className="space-y-2 py-6 border-y">
        <span>
          <p className="text-[#25324B] text-[1.1875rem]">Account NO</p>
          <p className="text-[#0AA07B] text-base">1234567890</p>
        </span>
      </div>
      <div className="border border-x-transparent py-8 px-4 grid md:gap-6 gap-4 md:grid-cols-3 grid-cols-2">
        {/* Hardcoded data*/}
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Business Name
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              PursBusiness Limited
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">Type</p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              NGO
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Industry
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              Fintech
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Full Name
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              Temitope Williams
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">Gender</p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              Male
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Phone Number
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              0806xxxxx250
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Email Address
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              yourmail@gmail.com
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              House Number
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              No 23
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              Street Name
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              Obawole street nidike
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">State</p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              Ogun
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">
              ID Number
            </p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              23456789344
            </p>
          </span>
        </div>
        <div>
          <span className="space-y-2">
            <p className="text-[#7C88B1] text-[0.875rem] font-normal">BVN</p>
            <p className="text-base text-[#25324B] leading-normal font-semibold">
              3444678099735
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default BusinessDetailsTab;
