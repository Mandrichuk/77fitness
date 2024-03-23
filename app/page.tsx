import Header from "./home/Header";
import Footer from "./home/Footer";
import Gallery from "./home/Gallery";
import Team from "./home/Team";
import Prices from "./home/Prices";
import Introduction from "./home/Introduction";
import Newsletter from "./home/Newsletter";
import SocialMedia from "./home/SocialMedia";
import Activity from "./home/Activity";

import Image from "./components/Image";

function Home() {
  return (
    <main>

      <Image image="77fitness/nqolbwafyj6u8pcltf8i" alt="77fitness" />

      <Header />
      <Introduction />
      <Team />
      <Gallery />
      <SocialMedia />
      <Prices />
      <Activity />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default Home;
