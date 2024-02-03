import "./SearchPanel.css";
import nothingFIndImg from '../../assets/search__nothing.png'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { incPendingCart } from "../../context/singleSlice";

export default function SearchPanel({ data, search, setSearch }) {
  const dispatch = useDispatch()
  const home = (el) => {
    navigate(`single-page/${el.id}`)
    dispatch(incPendingCart(el))  
    setSearch('')
  }
  const filteredProducts = data.filter((el) => {
    return el.title.toLowerCase().includes(search.toLowerCase());
  });
  const navigate = useNavigate()
  return (
    <div className="serach__panel">
      <div className="filtered__products">
        {!filteredProducts.length ? (
          <div className="nothingSearch">
            <img src={nothingFIndImg} />
            <h3>Hechnarsa toplimadi</h3>
          </div>
        ) : (
          filteredProducts.slice(0, 3)?.map((filPro) => (
            <div key={filPro.id} onClick={() => home(filPro)} className="filtered__item">
              <img src={filPro.url} />
              <div className="texts__filteredProducts">
                <p>{filPro.title}</p>
                <div className="price__filteredProducts">
                  <b>{filPro.price} so'm</b>
                  <del>{filPro.price * 1.2} so'm</del>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
