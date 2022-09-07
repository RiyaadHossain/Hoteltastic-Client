import React from "react";
import OurAgents from "../../Components/OurAgents";
import Banner from "./Banner";
import AppPromotion from "./AppPromotion";
import CallToAction from "./CallToAction";
import FeatureRooms from "./FeatureRooms";
import NewsArticle from "./NewsArticle";
import HotProperty from "./HotProperty/HotProperty";

function Home() {
  return (
    <>
      <Banner />
      <FeatureRooms />
      <HotProperty/>
      <CallToAction />
      <NewsArticle/>
      <AppPromotion />
    </>
  );
}

export default Home;
