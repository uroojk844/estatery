"use client";
import { DetailsStore } from "@/store/details_store";
import Image from "next/image";
import { useContext } from "react";

const Logo = () => {
  const details = useContext(DetailsStore);

  return <Image src={details[0]?.logo} width={40} height={40} alt="logo" />;
};

export default Logo;
