import React from "react";
import Banner from "./Banner";
import AppPromotion from "./AppPromotion";
import CallToAction from "./CallToAction";
import FeatureRooms from "./FeatureRooms";

function Home() {
  return (
    <>
      <Banner />
      <FeatureRooms />
      <CallToAction/>
      <AppPromotion />
    </>
  );
}

export default Home;
