import { motion } from "framer-motion";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import FAQs from "../components/FAQs";
import Features from "../components/Feature";
import PricingTable from "../components/PricingTable";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <NavBar />
      <motion.div initial="initial" animate="animate" exit="exit">
        <div id="home">
          <Header />
        </div>
        <Logos />
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <PricingTable id />
        </div>
        <Testimonials />
        <div id="faqs">
          <FAQs />
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Home;
