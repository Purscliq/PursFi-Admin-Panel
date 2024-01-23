import RefundTable from "./RefundTable";

const Refund = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Refund</h2>
        <p className="text-[16px] text-[#7C8493]">
          Showing the list of refunds you have on PursBusiness
        </p>
      </span>

      <RefundTable />
    </section>
  );
};

export default Refund;
