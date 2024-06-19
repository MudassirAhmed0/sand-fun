import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";
import Loading from "@/app/[locale]/loading";

const Index = ({ children, arabic }) => {
  return (
    <div className={`${arabic ? "rtl" : "ltr"}`}>
      <ScrollToTop />
      <Header arabic={arabic} />
      <main>{children}</main>
      <Footer arabic={arabic} />
    </div>
  );
};

export default Index;
