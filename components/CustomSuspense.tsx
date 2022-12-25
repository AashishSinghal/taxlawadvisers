import React, { Suspense } from "react";
import Fallback from "./Fallback";

type Props = {
  children: React.ReactNode;
};

const CustomSuspense = ({ children }: Props) => {
  return <Suspense fallback={<Fallback />}>{children}</Suspense>;
};

export default CustomSuspense;
