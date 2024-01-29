
import { MenuProps } from "antd";
import Link from "next/link";
import DashIcon from "@/assets/svg/DashIcon";
import ClientIcon from "@/assets/svg/ClientIcon";
import TransIcon from "@/assets/svg/TransIcon";
import AdminIcon from "@/assets/svg/AdminIcon";
import RolesIcon from "@/assets/svg/RolesIcon";
import PayrollIcon from "@/assets/svg/PayrollIcon";
import PaymentIcon from "@/assets/svg/PaymentIcon";
import RefundIcon from "@/assets/svg/RefundIcon";
import DisputeIcon from "@/assets/svg/DisputeIcon";
export const sidebarData1: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    icon: <DashIcon className=" font-bold text-[#7C8493]" />,
    key: "dashboard",
  },
  {
    label: <Link href="/clientele">Clientele</Link>,
    icon: <ClientIcon className=" font-bold text-[#7C8493]" />,
    key: "clientele",
  },

  {
    label: <Link href="/transaction">Transaction</Link>,
    icon: <TransIcon className=" font-bold text-[#7C8493]" />,
    key: "transaction",
  },

  // {
  //   label: <Link href="/invoice">Invoices</Link>,
  //   icon: <TransIcon className=" font-bold text-[#7C8493]" />,
  //   key: "invoice",
  // },
];
export const sidebarData2: MenuProps["items"] = [
  {
    label: <Link href="/admin">Admins</Link>,
    icon: <AdminIcon className=" font-bold text-[#7C8493]" />,
    key: "admin",
  },
  {
    label: <Link href="/roles-permission">Roles & Permissions</Link>,
    icon: <RolesIcon className=" font-bold text-[#7C8493]" />,
    key: "roles-permission",
  },

  {
    label: <Link href="/payroll">Payroll</Link>,
    icon: <PayrollIcon className=" font-bold text-[#7C8493]" />,
    key: "payroll",
  },

  // {
  //   label: <Link href="/staff">Staff</Link>,
  //   icon: <PayrollIcon className=" font-bold text-[#7C8493]" />,
  //   key: "staff",
  // },

  {
    label: <Link href="/payment">Payment</Link>,
    icon: <PaymentIcon className=" font-bold text-[#7C8493]" />,
    key: "payment",
  },
];
export const sidebarData3: MenuProps["items"] = [
  {
    label: <Link href="/refund"> Refund</Link>,
    icon: <RefundIcon className=" font-bold text-[#7C8493]" />,
    key: "refund",
  },
  // {
  //   label: <Link href="/dispute">Dispute</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "dispute",
  // },
  {
    label: <Link href="/charge">Charge</Link>,
    icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
    key: "charge",
  },
  // {
  //   label: <Link href="/event">Event & Ads</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "event",
  // },
  // {
  //   label: <Link href="/statement">Statement</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "statement",
  // },
  {
    label: <Link href="/setting">Settings</Link>,
    icon: <RefundIcon className=" font-bold text-[#7C8493]" />,
    key: "setting",
  },
  {
    label: <Link href="/help-center"> Help Center</Link>,
    icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
    key: "help-center",
  },
  // {
  //   label: <Link href="/banking">Banking</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "banking",
  // },
  // {
  //   label: <Link href="/apps">Apps</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "apps",
  // },
];
export const sidebarData4: MenuProps["items"] = [
  // {
  //   label: <Link href="/setting">Settings</Link>,
  //   icon: <RefundIcon className=" font-bold text-[#7C8493]" />,
  //   key: "setting",
  // },
  // {
  //   label: <Link href="/api">Api and Settings</Link>,
  //   icon: <DisputeIcon className=" font-bold text-[#7C8493]" />,
  //   key: "api",
  // },
 
];
export const activeKeys = [
  "dashboard",
  "clientele",
  "payment",
  "payroll",
  "refund",
  "help-center",
  "api",
  "setting",
  "apps",
  "disputes",
  "invoice",
  "admin",
  "banking",
  "statement",
  "event",
  "charge",
  "roles-permission",
  "staff",
  "admin",
  "transaction"
];
