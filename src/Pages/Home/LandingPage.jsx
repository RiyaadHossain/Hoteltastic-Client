import React from "react";
import OurAgents from "./OurAgents/OurAgents";
import Banner from "./Banner";
import AppPromotion from "./AppPromotion";
import CallToAction from "./CallToAction";
import FeatureRooms from "./FeatureRooms";
import NewsArticle from "./NewsArticle";
import HotProperty from "./HotProperty/HotProperty";
import Testimonials from "./Testimonials/Testimonials";

function Home() {
  return (
    <>
      <Banner />
      <FeatureRooms />
      <HotProperty/>
      <Testimonials/>
      <OurAgents></OurAgents>
      <CallToAction />
      <NewsArticle/>
      <AppPromotion />
    </>
  );
}

export default Home;
