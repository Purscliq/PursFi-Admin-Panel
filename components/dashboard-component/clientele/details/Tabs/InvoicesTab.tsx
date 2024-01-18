import React from "react";
import InvoicesTable from "./InvoicesTable";

const IvoicesTab = () => {
  return (
    <section>
      <div className="py-8 px-4 rounded-[0.5rem] border border-[#899A9A]">
        <h1 className="text-[1.125rem] font-bold text-black">
          List of invoices
        </h1>

        <InvoicesTable />
      </div>
    </section>
  );
};

export default IvoicesTab;
