import { useState } from 'react';
import React from 'react';
import "../Admin.css";
import { FaCamera } from "react-icons/fa";

const CATEGORY = ["Telefon", "Televizor", "Kompyuter", "Soat"];

function CreateProduct() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [url, setUrl] = useState("")
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let newPro = {
      category,
      title,
      price: + price,   
      url
    };
    console.log(newPro);
  };

  return (
    <div>
      <h2>Create Product</h2>
      <form onSubmit={handleCreateProduct} className='create__product-form'>
        <input required className='create__product-input' type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
        <input required className='create__product-input' type="number" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)} />
        <select required value={category} onChange={(e) => setCategory(e.target.value)} className='create__product-input' name="" id="">
          <option disabled value="">Tanlang</option>
          {CATEGORY?.map((el, inx) => <option key={inx}>{el}</option>)}
        </select>
        <div  className="create__product-file">
          <FaCamera />
          <input 
          required
          //multiple
          accept='.png, .jpg, .jpeg, .heic' 
          onChange={(e)=> setUrl(e.target.files)} 
          type="file" />
        </div>
        <br />
        <button className='create__product-input'>Create Product</button>
      </form>
    </div>
  );
}

export default CreateProduct;
