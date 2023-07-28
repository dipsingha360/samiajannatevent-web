import Contact from "./components/Contact";
import Description from "./components/Description";
import Slider from "./components/Slider";
import Welcome from "./components/Welcome";

export default function Home() {
  return (
    <>
      <Slider />
      <Welcome />
      <Description />
      <Contact />
    </>
  );
}
