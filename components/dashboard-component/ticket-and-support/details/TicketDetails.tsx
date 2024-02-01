import React from "react";

const TicketDetails = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Ticket and Support</h2>
      </span>

      <div className="bg-white px-4 py-8 space-y-4">
        <div className="lg:flex justify-between gap-4 space-y-1 lg:space-y-0">
          <span className="flex gap-2">
            <div className="bg-[#F8A53499] p-2 rounded-full w-5 h-5 my-1" />
            <p className="font-bold text-lg">Ticket# 2023-CS123</p>
          </span>
          <p className="font-normal text-sm">Posted at 12:45 AM</p>
        </div>

        <div>
          <p className="font-bold text-lg">
            How to deposit money to my portal?
          </p>
          <p className="text-[#84818A] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>

          <form className="border border-[#E7E7E7] bg-[#FCFCFC] mt-8 py-6 px-4 space-y-8">
            <div className="space-y-4">
              <p className="font-bold text-lg">Response to Ticket</p>
              <div className="space-y-1">
                <label htmlFor="answers" className="text-[#2E2A40] text-base">
                  Answers
                </label>
                <textarea
                  id="answers"
                  placeholder="Sorry for the inconvenience, your issue has been resolved. Thank you for your co-operation"
                  defaultValue="Sorry for the inconvenience, your issue has been resolved. Thank you for your co-operation" //remove this!!
                  required
                  className="w-full min-h-32 px-3 py-2 resize-y text-[#757575] appearance-none bg-transparent outline-none border focus:border-black shadow-sm "
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-lg">Reply to Ticket</p>
              <div className="space-y-1">
                <label
                  htmlFor="ticketBody"
                  className="text-[#2E2A40] text-base"
                >
                  Ticket Body
                </label>
                <textarea
                  id="ticketBody"
                  placeholder="Type ticket issue here.."
                  required
                  className="w-full min-h-32 px-3 py-2 resize-y text-[#757575] appearance-none bg-transparent outline-none border focus:border-black shadow-sm"
                />
              </div>
            </div>

            <div className="flex justify-between gap-4">
              <button
                type="submit"
                className="bg-black text-white font-normal rounded-[0.25rem] w-max py-3 lg:px-6 px-3 text-base mt-6"
              >
                Submit Reply
              </button>
              <button
                type="submit"
                className="bg-[#F6513B] text-black font-normal rounded-[0.25rem] w-max py-3 lg:px-6 px-6 text-base mt-6"
              >
                Close Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TicketDetails;
