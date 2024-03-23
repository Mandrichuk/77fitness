import React from "react";

import Activity from "./components/Activity";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Prices from "./components/Prices";
import SocialMedia from "./components/SocialMedia";
import Team from "./components/Team";

function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <Gallery />
      <Activity />
      <Prices />
      <Team />
      <SocialMedia />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Home;
