import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const PageLayout = ({ children }) => {
  return (
    <main className="pageLayout">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
