import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Icon from "../src/assets/icon.png";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar icon={Icon} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
