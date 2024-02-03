import { useEffect } from "react";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import nothing from "../../assets/wishesNothing.png";

function Wishes({ data }) {
  const wishes = useSelector((state) => state.wishes.value);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      {!wishes.length ? (
        <Empty
          title="Sizga yoqqanini qoʻshing"
          url={nothing}
          desc="Mahsulotdagi belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
          btnTitle="Akkountga kirish"
          link="/login"
        />
      ) : (
        <Products data={wishes} />
      )}
      <h2 style={{ padding: "65px 0 20px 0" }}>
        Bu mahsulot bilan quyidagilar xarid qilinadi:
      </h2>
      <Products data={data.slice(4, 9)} />
    </div>
  );
}

export default Wishes;
