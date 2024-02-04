import {  Drawer } from "antd";
import { IoIosArrowBack } from "react-icons/io";
interface TransactionModalProps {
  open: boolean;
  cancel: () => void;
}
const BulkDrawer: React.FC<TransactionModalProps> = ({ open, cancel }) => {

  return (
    <div>
      <Drawer
        title={null}
        placement="right"
        width="100%"
        open={open}
        getContainer={false}
        closable={false}
        style={{ position: "absolute" }}
      >
        <h1 className="text-3xl font-bold mb-3">Bulk Email</h1>
        <div className="p-2 bg-white shadow-sm flex justify-between items-center">
        <IoIosArrowBack size={25} onClick={cancel} />

        </div>
    
      </Drawer>
    </div>
  );
};

export default BulkDrawer;
