import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <>
      <Header />
      <section className='content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='line-card' element={<Products />} />
          <Route path='thank-you' element={<ThankYou />} />
        </Routes>
      </section>
      <Footer />
    </>
  );
}

export default App;
