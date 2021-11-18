import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import OurServices from "./components/OurServices";
import CheckWebsite from "./components/CheckWebsite";
import PricingPlan from "./components/PricingPlan";
import BrandVisibility from "./components/BrandVisibility";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <div className="back-to-top"></div>

      <Header />
      
      <Services />
      
      <About />

      <OurServices />

      <CheckWebsite />

      <PricingPlan />

      <BrandVisibility />

      <Blog />

      <Footer />

    </div>
  );
}

export default App;
