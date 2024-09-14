import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/page/HomePage";
import ContactUs from "./components/page/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
