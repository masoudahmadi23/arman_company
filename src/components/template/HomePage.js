import About from "../module/Homepage/About";
import Banner from "../module/Homepage/Banner";
import Example from "../module/Homepage/Example";
import Facilities from "../module/Homepage/Facilities";
import Services from "../module/Homepage/Services";
import Steps from "../module/Homepage/Steps";
import Superiority from "../module/Homepage/Superiority";
import Whyus from "../module/Homepage/Whyus";

function HomePage() {
  return (
    <>
      <Banner />
      <Whyus />
      <Superiority />
      <Steps />
      <Services />
      <About />
      <Facilities />
      <Example />
    </>
  );
}

export default HomePage;
