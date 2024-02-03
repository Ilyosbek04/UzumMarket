import { useState } from "react";
import "./Navbar.css";
import {
  CiUser,
  CiHeart,
  CiShoppingCart,
  CiSearch,
  CiHome,
} from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { BsCollection } from "react-icons/bs";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import SearchPanel from "../search-panel/SearchPanel";
import { useSelector, useDispatch } from "react-redux";
import { removeCart } from "../../context/cartSlice";
import { incPendingCart } from "../../context/singleSlice";

function Navbar({ data }) {
  const [search, setSearch] = useState("");
  let { pathname } = useLocation();
  const cart = useSelector((s) => s.cart.value);
  const wishes = useSelector((s) => s.wishes.value);
  const navigate = useNavigate();
  const [hoverBar, setHoverBar] = useState(false);
  const dispatch = useDispatch();
  const hoverClick = (el) => {
    const id = cart.find((element) => element.id === el.id);
    dispatch(incPendingCart(el));
    navigate(`/single-page/${id.id}`);
    setHoverBar(false);
  };
  if (pathname.includes("/login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__left">
        <NavLink to={"/"} className='nav__logo'>
          <div className="logo_img">
            <img src="https://cdn-icons-png.flaticon.com/128/13370/13370361.png" alt="" />
          </div>
          <h2>SANTA MARKET</h2>
        </NavLink>
          <button className="nav__category">
            <BsCollection />
            <span>Katalog</span>
          </button>
        </div>
        <div className="nav__search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Qidirish..."
          />
          <button>
            <CiSearch />
          </button>
          {search.trim() && <SearchPanel data={data} search={search} setSearch={setSearch} />}
        </div>
        <ul className="nav__collection">
          <li className="nav__item nav__home">
            <NavLink to={"/"}>
              <CiHome />
              <span>Asosiy sahifa</span>
            </NavLink>
          </li>
          <li className="nav__item nav__home">
            <Link to={"/"}>
              <FiMenu />
              <span>Katalog</span>
            </Link>
          </li>
          <li className="nav__item">
            <NavLink to={"/admin/create-product"}>
              <CiUser />
              <span>Kirish</span>
            </NavLink>
          </li>
          <li className="nav__item wish">
            <NavLink to={"/wishes"}>
              <CiHeart />
              <span>Sevimlilar</span>
              {wishes.length ? <p className="wishes_p"></p> : <></>}
            </NavLink>
          </li>
          <li
            className="nav__item"
            onMouseEnter={() => setHoverBar(true)}
            onMouseLeave={() => setHoverBar(false)}
          >
            <NavLink to={"/cart"}>
              <CiShoppingCart />
              <div className="pri">
                <span>Savat</span>
                {cart.length ? <p>{cart.length}</p> : <></>}
              </div>
            </NavLink>
            {!pathname.includes("/cart") &&
              hoverBar &&
              (cart.length ? (
                <div className="drop__item">
                  {cart.slice(0, 4)?.map((el) => (
                    <div key={el.id} className="drop__product">
                      <img className="myImg" src={el.url} />
                      <div
                        className="drop__product_title"
                        onClick={() => hoverClick(el)}
                      >
                        <p>{el.title}</p>
                        <span>
                          {el.price} so'm X{el.quantity}
                        </span>
                      </div>
                      <div
                        onClick={() => dispatch(removeCart(el))}
                        className="drop__product_clear"
                      >
                        <FaRegTrashCan />
                      </div>
                    </div>
                  ))}
                  <div
                    className="product__item_btn"
                    onClick={() => navigate("/cart")}
                  >
                    <button>Buyurtmani rasmilastirish</button>
                  </div>
                </div>
              ) : (
                <></>
              ))}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
