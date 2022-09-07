import React from "react";
import OurAgents from "../../Components/OurAgents";
import Banner from "./Banner";
import AppPromotion from "./AppPromotion";
import CallToAction from "./CallToAction";
import FeatureRooms from "./FeatureRooms";
import NewsArticle from "./NewsArticle";

function Home() {
  return (
    <>
      <Banner />
      <FeatureRooms />
      <CallToAction />
      <NewsArticle/>
      <AppPromotion />
    </>
  );
}

export default Home;
