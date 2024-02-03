import React from 'react'
import "./Footer.css"
import { useLocation } from 'react-router-dom';


function Footer() {
  let { pathname } = useLocation();
  if (pathname.includes("/login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className='container'>
      <div className='feter'>
        <button className="Footer_bottom">
          <h2>Yana ko'rsatish 20</h2>
        </button>
        <div className="footer">
          <div className="footer_card">
            <h4>Biz haqimizda</h4>
            <ul>
              <li>Topshirish punktlari</li>
              <li>Vakansiyalar</li>
            </ul>
          </div>
          <div className="footer_card">
            <h4>Foydalanuvchilarga</h4>
            <ul>
              <li>Biz bilan bog'lanish</li>
              <li>Savol-Javob</li>
            </ul>
          </div>
          <div className="footer_card">
            <h4>Tadbirkorlarga</h4>
            <ul>
              <li>Uzumda soting</li>
              <li>Sotuvchi kabinetiga kirish</li>
            </ul>
          </div>
          <div className="footer_card">
            <h4>Ilovani yuklab olish</h4>

            <div className="apple">
              <div className="aplle_icon">
                <div className="aplle_iconImg">
                  <img src="https://cdn-icons-png.flaticon.com/128/0/747.png" alt="" />
                </div>
                <p>AppStore</p>
              </div>
              <div className="aplle_icon">
                <div className="aplle_iconImg">
                  <img src="https://cdn-icons-png.flaticon.com/128/6124/6124997.png" alt="" />
                </div>
                <p>GooglePlay</p>
              </div>
            </div>
            <div className="iconkalar">
              <h4>Uzum ijtimoiy tarmoqlarda</h4>
              <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/3536/3536661.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/3938/3938026.png" alt="" />
              <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" alt="" />
            </div>
          </div>
        </div>
        <hr className='hr' />
        <div className="ost">

          <p>Maxfiylik kelishuvi
            Foydalanuvchi kelishuvi</p>
          <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
        </div>
      </div>
    </div>
  )
}

export default Footer