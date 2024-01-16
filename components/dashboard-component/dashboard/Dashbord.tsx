import React from "react";

const Dashbord = () => {
  const date = new Date();
  return (
    <div className="max-w-[1640px] flex flex-col p-4  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Welcome Hope</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing your Account metrics for{" "}
          {date.toLocaleString("en-US", {
            month: "long",
            day: "2-digit",
            year: "numeric",
          })}
        </p>
      </span>
    </div>
  );
};

export default Dashbord;
