import SubHeader from "./components/sub-header/SubHeader";
import Navbar from "./components/navbar/Navbar";
import Home from "./router/home/Home";
import Login from "./router/login/Login";
import Wishes from "./router/wishes/Wishes";
import Cart from "./router/cart/Cart";
import Footer from "./components/footer/Footer";
import NavbarBottom from "./components/navbar-bottom/NavbarBottom";
import SinglePage from "./router/single-page/SinglePage";
import NotFind from "./router/not-find/NotFind";
import { Routes, Route } from "react-router-dom";
import { PRODUCTS } from "./static";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Admin from "./router/admin/Admin";
import Auth from "./router/auth/Auth";

function App() {
  return (
    <div className="App">
      <SubHeader />
      <Navbar data={PRODUCTS} />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<Home data={PRODUCTS} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishes" element={<Wishes data={PRODUCTS} />} />
        <Route path="/cart" element={<Cart data={PRODUCTS} />} />
        <Route path="/" element={<Auth />}>
          <Route path="/admin/*" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFind />} />
        <Route path="single-page/:id" element={<SinglePage data={PRODUCTS} />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
