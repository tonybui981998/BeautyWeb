import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import ContactUs from "./components/page/ContactUs";
import SerumProduct from "./components/page/SerumProduct";
import Moisturizing from "./components/page/Moisturizing";
import Remover from "./components/page/Remover";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/serum" element={<SerumProduct />} />
          <Route path="/moisturizing" element={<Moisturizing />} />
          <Route path="/removal" element={<Remover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
