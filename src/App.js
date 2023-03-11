import logo from "./logo.svg";
import "./App.css";
import Navigation from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />

      <Navigation />
    </BrowserRouter>
  );
}

export default App;
