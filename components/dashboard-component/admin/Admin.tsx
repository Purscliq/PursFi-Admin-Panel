import AdminTable from "./AdminTable";

const Admin = () => {
  return (
    <section className="max-w-[1640px] flex flex-col p-4 space-y-6  h-screen overflow-y-scroll">
      <span>
        <h2 className="text-[25px] font-bold mb-1"> Admin</h2>
      </span>

      <AdminTable />
    </section>
  );
};

export default Admin;
