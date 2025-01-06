import { Analytics } from "@vercel/analytics/react";
import Footer from "/src/components/Footer/Footer";
import Timeline from "/src/components/timeline/Timeline";
import TabsProject from "/src/components/TabsProject/TabsProject";
import Header from "/src/components/comuns/Header";
import Banner from "/src/components/banner/Banner";
import GaleryStacks from "/src/components/galeryStacks/GaleryStacks";
import AboutMe from "/src/components/aboutMe/AboutMe";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Banner />
        <GaleryStacks />
      </div>
      <TabsProject />
      <AboutMe />
      <Timeline />

      <Footer />
      <Analytics />
    </>
  );
};

export default Home;
