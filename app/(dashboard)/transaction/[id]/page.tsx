import TransactionDetails from "@/components/dashboard-component/transaction/details/TransactionDetails";

interface IProps {
    params: {
      id: number;
    };
  }
  
  const page = ({ params }: IProps) => {
    const { id } = params;
  console.log(id);
  
    // const detailsData = ClienteleTableData.find((item) => item.id === id) || null;
  
    return <TransactionDetails />
  };
  
  export default page;