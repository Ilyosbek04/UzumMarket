import { useEffect } from "react";
import "./SinglePage.css";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { incCart, decCart } from "../../context/cartSlice";
import { toggleWishes } from "../../context/wishesSlice";
import NotFind from "../not-find/NotFind";
import Products from "../../components/products/Products";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { decPendingCart, incPendingCart } from "../../context/singleSlice";

export default function SinglePage({ data }) {
  const dispatch = useDispatch();
  const params = useParams();
  const product = data.find((el) => el.id === params.id);
  const wishes = useSelector((s) => s.wishes.value);
  const cat = useSelector((s) => s.pendingCart.value);
  const cart = cat.find(el => el.id === params.id)
  const navigate = useNavigate()
  const wishesClick = (product) => {
    dispatch(toggleWishes(product));
  };
  const adToCard = (prod) => {
    notify();
    navigate('/cart')
  };
  const notify = () =>
    toast.success("Sizning maxsulotingiz savatga qoshildi", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params]);
  if (!product) {
    return <NotFind />;
  }
  return (
    <div className="container">
      <div className="single__page">
        <img src={product.url} />
        <div className="right_page">
          <div className="top_page">
            <span>5.0 ( 6 baho ) 200 ta buyurtma</span>
            <div className="singlr_like" onClick={() => wishesClick(product)}>
              <button>
                {!wishes?.some((item) => item.id === product.id) ? (
                  <FaRegHeart />
                ) : (
                  <FaHeart className="full_heart" />
                )}
              </button>
              <span>
                {!wishes?.some((item) => item.id === product.id)
                  ? "istaklarda"
                  : "istaklarga"}
              </span>
            </div>
          </div>
          <div className="single_title">
            <p className="title">{product.title}</p>
            <div className="single__category">
              <p className="title_kategoriya">Kategoriya:</p>
              <span>{product.category}</span>
            </div>
            <div className="single__title_arrive">
              <p className="arrive">Yetkazib berish:</p> <p className="i">i</p>
              <span>1 kun, bepul</span>
            </div>
            <hr />
          </div>
          <div className="right_page_center">
            <h4>Miqdori</h4>
            <div className="right_page_center_counter">
              <button disabled={cart.quantity <= 1 ? true : false} onClick={() => dispatch(decPendingCart(product))}>-</button>
              <span>{cart.quantity}</span>
              <button onClick={() => dispatch(incPendingCart(product))}>+</button>
            </div>
            <div className="single_page_price">
              <h4>Narxi:</h4>
              <div className="price">
                <p>{(product.price * cart.quantity).brm()} so'm</p>
                <del>{(product.price * 1.2).brm()} so'm</del>
              </div>
            </div>
          </div>
          <div className="bottom_page">
            <button
              onClick={() => adToCard(product)}
              className="single__page_addCart">
              Savatga qoshish
            </button>
          </div>
        </div>
      </div>
      <Products data={data.slice(0, 5)} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}
