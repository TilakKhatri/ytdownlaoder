import React from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {


  return (
    <>
      <Header />
      <div className="mt-20">
        <Main />
      </div>
      <Footer />
    </>
  );
};

export default App;
