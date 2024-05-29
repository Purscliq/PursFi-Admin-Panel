import Details from "@/components/dashboard-component/payroll/details/PayrollDetails";

const page = ({ params }: { params: { id: string } }) => {
  return <Details id={params.id} />;
};

export default page;
