import React from "react";

import AboutMe from "/src/components/aboutMe/AboutMe";

import Footer from "/src/components/Footer/Footer";
import Timeline from "/src/components/timeline/Timeline";
import TabsProject from "/src/components/TabsProject/TabsProject";
import Header from "/src/components/comuns/Header";
import Banner from "/src/components/banner/Banner";
import GaleryStacks from "/src/components/galeryStacks/GaleryStacks";

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
