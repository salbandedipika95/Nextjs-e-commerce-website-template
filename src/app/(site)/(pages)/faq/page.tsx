import Signup from "@/components/Auth/Signup";
import React from "react";

import { Metadata } from "next";
import Faq from "@/components/Faq";
export const metadata: Metadata = {
  title: "FAQ Page | NextCommerce Nextjs E-commerce template",
  description: "This is FAQ Page for NextCommerce Template",
  // other metadata
};

const FaqPage = () => {
  return (
    <main>
      <Faq/>
    </main>
  );
};

export default FaqPage;
