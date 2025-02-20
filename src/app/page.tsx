import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import HomePage from "./home/page";

const Page = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
};
export default Page;
