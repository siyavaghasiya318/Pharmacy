
import { LuCircleCheckBig } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";
 import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiShieldCheck } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa6";

export const howItWorksData = [
  {
    id: 1,
    step: "01",
    icon: FaMagnifyingGlass,
    title: "Search & Select",
    description:
      "Browse through thousands of genuine medicines and healthcare products.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-100",
  },
  {
    id: 2,
    step: "02",
    icon: HiShieldCheck,
    title: "Upload & Verify",
    description:
      "Upload your prescription. Our pharmacists will verify it in minutes.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-100",
  },
  {
    id: 3,
    step: "03",
    icon: FaCheck,
    title: "Fast Delivery",
    description:
      "Get your order delivered safely to your doorstep within 24 hours.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-100",
  },
];

export const whyChoosePharmOn = [
  {
    id: 1,
    icon: <CiDeliveryTruck />,
    title: "Fast Delivery",
    description: "Secure delivery at your doorstep within 24 hours.",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    icon: <IoShieldCheckmarkOutline/>,
    title: "100% Genuine",
    description: "Every medicine is verified and sourced from authorized distributors.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    icon: <LuCircleCheckBig/>,
    title: "Secure Checkout",
    description: "Your health and financial data are always protected.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 4,
    icon: <GrUserExpert/>,
    title: "Expert Support",
    description: "Our pharmacists are available 24/7 for your guidance.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];