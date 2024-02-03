import "./NotFind.css";
import { useNavigate } from "react-router-dom";
import notFindImg from "../../assets/search__nothing.png";

export default function NotFind() {
    const navigate = useNavigate()
  return (
    <div className="not_find">
      <img src={notFindImg} />
      <h2>404</h2>
      <h4>Page is not defind</h4>
      <button onClick={() => navigate('/')}>Asosiy saxifaga qaytish</button>
    </div>
  );
}
