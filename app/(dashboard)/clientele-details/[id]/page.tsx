import { ClienteleTableData } from "@/components/dashboard-component/content";
import Details from "@/components/dashboard-component/clientele/details/Details";

interface IProps {
  params: {
    id: number;
  };
}

const page = ({ params }: IProps) => {
  const { id } = params;

  const detailsData = ClienteleTableData.find((item) => item.id === id) || null;

  return <Details data={detailsData} />;
};

export default page;
