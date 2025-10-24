import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homePage/HomePage";
import Aboutpage from "./components/aboutpage/Aboutpage";
import Prediction from "./components/predictpage/Prediction";
import Contactpage from "./components/contactpage/Contactpage";
import Footer from "./components/footer/Footer";
import ScrollAnimation from "./components/scrollAnimation/ScrollAnimation";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />

      <ScrollAnimation>
        <HomePage />
      </ScrollAnimation>

      <ScrollAnimation>
        <Aboutpage />
      </ScrollAnimation>

      <ScrollAnimation>
        <Prediction />
      </ScrollAnimation>

      <ScrollAnimation>
        <Contactpage />
      </ScrollAnimation>

      <Footer />
    </div>
  );
};

export default App;
