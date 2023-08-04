import Contact from "./components/Contact";
import Description from "./components/Description";
import Slider from "./components/Slider";
import Slider2 from "./components/Slider2";
import Welcome from "./components/Welcome";
import WhatWeDo from "./components/WhatWeDo";
import WhyChoseUs from "./components/WhyChoseUs";

export default function Home() {
  return (
    <>
      {/* <Slider /> */}
      <Slider2 />
      <Welcome />
      <Description />
      <WhatWeDo />
      <WhyChoseUs />
      <Contact />
    </>
  );
}
