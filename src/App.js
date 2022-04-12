import "./App.css";

// import Footer from "./Components/Footer/Footer";
// import Header from "./Components/Header/Header";
// import Main from "./Components/Main/Main";

import NotFound from "./Components/Pages/NoTFound/NotFound";
import Contact from "./Components/Pages/Contact/Contact";
import Services from "./Components/Pages/Services/ServiceRequirements";
import Selected from "./Components/Pages/Selected/Selected";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Singleproduct from "./Components/Pages/Singleproduct/Singleproduct";

import { Route, Routes } from "react-router-dom";
import Products from "./Components/Pages/Products/Products";
import Card from "./Components/Pages/Card/Card";
// import Home from "./Pages/Home/Home";
// import Menu from "./Pages/Menu/Menu";
// import Admin from "./Routes/Private/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/service-requirements" element={<Services />} />
        <Route path="/card" element={<Card />} />
        <Route path="/singleproduct" element={<Singleproduct />} />
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
