import AddToTaskIcon from "@/assets/svg/email-icons/AddToTaskIcon";
import ArchiveIcon from "@/assets/svg/email-icons/ArchiveIcon";
import CloseIcon from "@/assets/svg/email-icons/CloseIcon";
import DeleteIcon from "@/assets/svg/email-icons/DeleteIcon";
import ForwardIcon from "@/assets/svg/email-icons/ForwardIcon";
import LabelImportantIcon from "@/assets/svg/email-icons/LabelImportantIcon";
import LabelsIcon from "@/assets/svg/email-icons/LabelsIcon";
import MoreDotsIcon from "@/assets/svg/email-icons/MoreDotsIcon";
import MoveToIcon from "@/assets/svg/email-icons/MoveToIcon";
import NewWindowIcon from "@/assets/svg/email-icons/NewWindowIcon";
import PrintIcon from "@/assets/svg/email-icons/PrintIcon";
import ReplyAllIcon from "@/assets/svg/email-icons/ReplyAllIcon";
import ReplyIcon from "@/assets/svg/email-icons/ReplyIcon";
import SmallArrowDownIcon from "@/assets/svg/email-icons/SmallArrowDownIcon";
import SnoozeIcon from "@/assets/svg/email-icons/SnoozeIcon";
import SpamIcon from "@/assets/svg/email-icons/SpamIcon";
import StarIcon from "@/assets/svg/email-icons/StarIcon";
import UnreadIcon from "@/assets/svg/email-icons/UnreadIcon";
import { Drawer, Avatar } from "antd";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
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
        <div className="p-2 bg-white shadow-sm lg:flex justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex gap-6">
            <IoIosArrowBack size={25} onClick={cancel} />
            <span className="flex gap-6 pt-1">
              <button type="button" title="Icon">
                <ArchiveIcon />
              </button>
              <button type="button" title="Icon">
                <SpamIcon />
              </button>
              <button type="button" title="Icon">
                <DeleteIcon />
              </button>
            </span>
            <span className="flex gap-6 pt-1">
              <button type="button" title="Icon">
                <UnreadIcon />
              </button>
              <button type="button" title="Icon">
                <SnoozeIcon />
              </button>
              <button type="button" title="Icon">
                <AddToTaskIcon />
              </button>
            </span>
            <span className="flex gap-6 pt-1">
              <button type="button" title="Icon">
                <MoveToIcon />
              </button>
              <button type="button" title="Icon">
                <LabelsIcon />
              </button>
              <button type="button" title="Icon">
                <MoreDotsIcon />
              </button>
            </span>
          </div>
          <div className="flex gap-6">
            <p className="text-base text-[#0000008A]">1–50 of 2,619</p>
            <span className="flex gap-2">
              <BiChevronLeft className="w-5 h-5" />
              <BiChevronRight className="w-5 h-5" />
            </span>
          </div>
        </div>

        {/* email subjext */}
        <div className="px-2 py-4 mt-4 bg-white shadow-sm lg:flex justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex gap-4">
            <h2 className="text-3xl font-semibold">Email Subject</h2>
            <button type="button" title="Label Important">
              <LabelImportantIcon />
            </button>
            <span className="flex gap-2 rounded-md bg-[#0000000D] h-max p-1 mt-2">
              Inbox {""}
              <button type="button" title="Close">
                <CloseIcon />
              </button>
            </span>
          </div>
          <div className="flex gap-4">
            <PrintIcon />
            <NewWindowIcon />
          </div>
        </div>

        {/* sender details */}
        <div className="p-2 mt-4 bg-white shadow-sm lg:flex justify-between items-center space-y-2 lg:space-y-0">
          <div className="flex gap-4">
            {/* Avatar */}
            <div className="bg-gray-300 rounded-full h-10 w-10 my-1" />
            {/* end of avatar */}
            <div className="text-[#0000008A] text-sm">
              <span className="md:flex gap-2 space-y-1 lg:space-y-0">
                <p className="text-md text-black font-semibold">
                  Michelle Rivera
                </p>
                <p className="font-semibold">
                  &lt; michelle.rivera@example.com &gt;{" "}
                </p>
                <p className="underline hover:no-underline">Unsubscribe</p>
              </span>
              <span className="flex gap-1">
                to <p className="font-semibold">me, Sidney, Sharon</p>{" "}
                <button type="button" title="Details">
                  <SmallArrowDownIcon />
                </button>
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-[#00000099]">
            <p className="font-semibold">9:14 AM (8 hours ago)</p>
            <button type="button" title="Icon">
              <StarIcon />
            </button>
            <button type="button" title="Icon">
              <ReplyIcon />
            </button>
            <button type="button" title="Icon">
              <MoreDotsIcon />
            </button>
          </div>
        </div>

        {/* body */}
        <div className="lg:px-16 px-8 py-3 mt-4 h-[500px] bg-white shadow-sm">
          <p className="text-md text-black font-semibold">
            Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
            qui esse pariatur duis deserunt mollit dolore cillum minim tempor
            enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut
            voluptate aute id deserunt nisi.
          </p>
          <div className="flex gap-4 mt-24">
            <button
              type="button"
              className="text-base text-[#1A73E8] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              Looking forward to it!
            </button>
            <button
              type="button"
              className="text-base text-[#1A73E8] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              We will be there!
            </button>
            <button
              type="button"
              className="text-base text-[#1A73E8] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              Thanks for the update!
            </button>
          </div>
          {/* reply, and forward */}
          <div className="flex gap-4 mt-6 pt-6 border-t">
            <button
              type="button"
              className="text-base flex gap-2 text-[#0000008A] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              <span className="py-1">
                <ReplyIcon />
              </span>
              Reply
            </button>
            <button
              type="button"
              className="text-base flex gap-2 text-[#0000008A] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              <span className="py-1">
                <ReplyAllIcon />
              </span>
              Reply all
            </button>
            <button
              type="button"
              className="text-base flex gap-2 text-[#0000008A] font-semibold border border-[#00000029] rounded-md px-4 py-1"
            >
              <span className="py-1">
                <ForwardIcon />
              </span>
              Forward
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default BulkDrawer;
