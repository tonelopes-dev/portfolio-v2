import React from "react";
import Header from "../components/comuns/Header";
import GaleryStacks from "../components/galeryStacks/GaleryStacks";
import AboutMe from "../components/aboutMe/AboutMe";
import Banner from "../components/banner/Banner";
import Projects from "../components/projects/Projects";
import Footer from "../components/Footer/Footer";
import Timeline from "../components/timelime/Timeline";
import TabsProject from "../components/TabsProject/TabsProject";

const Home = () => {
  return (
    <>
      <Header />
      <div className="shadow-md divide-y">
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