import HeroSection from "../components/shared/HeroSection";
import JobCatgeories from "../components/shared/JobCatgeories";
import Navbar from "../components/shared/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <JobCatgeories/>
      {/* <FeaturedJob/> */}
    </>
  );
};

export default Home;
