import React from "react";

import AboutMe from "../components/aboutMe/AboutMe";

import Footer from "../components/Footer/Footer";
import Timeline from "../components/timelime/Timeline";
import TabsProject from "../components/TabsProject/TabsProject";
import Header from "../components/comuns/Header";
import Banner from "../components/banner/Banner";
import GaleryStacks from "../components/galeryStacks/GaleryStacks";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <GaleryStacks />
      </div>

      <AboutMe />
      <TabsProject />
      <Timeline />
      <Footer />
    </>
  );
};

export default Home;
