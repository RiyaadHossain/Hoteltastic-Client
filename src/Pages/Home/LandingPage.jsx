import React from "react";
import OurAgents from "./OurAgents/OurAgents";
import Banner from "./Banner";
import AppPromotion from "./AppPromotion";
import CallToAction from "./CallToAction";
import FeatureRooms from "./FeatureRooms";
import NewsArticle from "./NewsArticle";
import HotProperty from "./HotProperty/HotProperty";
import Testimonials from "./Testimonials/Testimonials";
import Category from "./Category";

function Home() {
  return (
    <>
      <Banner />
      <Category/>
      <FeatureRooms />
      <HotProperty/>
      <Testimonials/>
      <OurAgents/>
      <CallToAction />
      <NewsArticle/>
      <AppPromotion />
    </>
  );
}

export default Home;
