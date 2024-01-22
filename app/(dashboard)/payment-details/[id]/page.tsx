import { PaymentTableData } from "@/components/dashboard-component/clientele/content";
import Details from "@/components/dashboard-component/payment/details/Details";

interface IProps {
  params: {
    id: number;
  };
}

const page = ({ params }: IProps) => {
  const { id } = params;

  const detailsData = PaymentTableData.find((item) => item.id === id) || null;

  return <Details data={detailsData} />;
};

export default page;
