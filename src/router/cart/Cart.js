import { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import CartProduct from "../../components/cart-product/CartProduct";
import { useSelector } from "react-redux";
import nothing from "../../assets/cartNothing.png";
import Products from "../../components/products/Products";

function Cart({ data }) {
  const cart = useSelector((s) => s.cart.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      {!cart.length ? (
        <Empty
          title="Savatda hozircha mahsulot yoʻq"
          url={nothing}
          desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
          btnTitle="Bosh sahifa"
          link="/"
        />
      ) : (
        <CartProduct data={cart} staticData={data} />
        )}
        <h2>Bu mahsulot bilan quyidagilar xarid qilinadi:</h2>
        <Products data={data.slice(5, 10)} />
    </div>
  );
}

export default Cart;
