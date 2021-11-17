import Footer from './Footer';
import Preloader from './Preloader';
import Header from './Header';
import ContactUs from './ContactUs';
import Search from './Search';
import Main from './Main';
import About from './About';
import Features from './Features';
import Subscribe from './Subscribe';
import Projects from './Projects';
import Testimonials from './Testimonials';

function App() {
  return (
    <div>
      <Preloader />

      <Header />

      <Search />

      <Main />

      <div className="scroll-down scroll-to-section"><a href="#about"><i className="fa fa-arrow-down"></i></a></div>

      <About />

      <Features />

      <Subscribe />

      <Projects />

      <Testimonials />

      <ContactUs />

      <Footer />
      
    </div>
  );
}

export default App;
