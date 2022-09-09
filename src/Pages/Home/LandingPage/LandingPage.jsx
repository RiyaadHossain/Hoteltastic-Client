import React from "react";
import OurAgents from "../OurAgents/OurAgents";
import Banner from "../Banner/Banner";
import AppPromotion from "../AppPromotion/AppPromotion";
import CallToAction from "../CallToAction/CallToAction";
import FeatureRooms from "../FeatureRooms/FeatureRooms";
import NewsArticle from "../NewsArticle/NewsArticle";
import HotProperty from "../HotProperty/HotProperty";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../Category/Category";
import PromotionalVideo from "../Video/PromotionalVideo";
import TopPlaces from "../TopPlaces/TopPlaces";

function Home() {
  return (
    <>
      <Banner />
      <Category/>
      <FeatureRooms />
      <PromotionalVideo/>
      <HotProperty/>
      <Testimonials/>
      <TopPlaces />
      <OurAgents/>
      <CallToAction />
      <NewsArticle/>
      <AppPromotion />
    </>
  );
}

export default Home;
