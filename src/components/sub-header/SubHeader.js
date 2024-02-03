import React from 'react'
import "./SubHeader.css"
import { useLocation } from 'react-router-dom';

function SubHeader() {
  let { pathname } = useLocation();
  if (pathname.includes("/login") || pathname.includes("admin")) {
    return <></>;
  }
  return (
    <div className='sub__header'>
        <div className="container">
            <p>Shahar Toshkent Topshiriqlar punkti</p>
            <p className='sub__header-title'>Buyurtmagizni 1 kunda bepul yetkazib beramiz</p>
            <p>Savol-javoblar Buyurtmalarim</p>
        </div>
    </div>
  )
}

export default SubHeader