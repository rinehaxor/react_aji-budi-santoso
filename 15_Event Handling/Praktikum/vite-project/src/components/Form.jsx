import styles from '../pages/CreateProduct.module.css';
import Button from './Button';
import logo from '../assets/logo.png';
import { article } from '../bahasaDeskripsi';
import React, { useState } from 'react';

export default function Form() {
  function handleClick(e) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Nomor acak: ' + randomNumber);
    e.preventDefault();
  }
  //state validasi input form
  const [productName, setProductName] = useState('');
  const [isProductDescValid, setIsProductDescValid] = useState('');
  //state ganti bahasa
  const [isIndonesian, setIsIndonesian] = useState('');

  //handle ganti bahasa
  const handleLanguageChange = () => {
    setIsIndonesian(!isIndonesian);
  };

  //validasi input form productname
  const maxInputProductName = 10;
  const handleProductNameChange = (event) => {
    const { value } = event.target;
    if (value.length <= maxInputProductName) {
      setProductName(value);
      event.target.classList.remove('is-invalid');
    } else {
      event.target.classList.add('is-invalid');
    }
  };

  return (
    <>
      <button onClick={handleLanguageChange}>{isIndonesian ? 'EN' : 'ID'}</button>
      <div className="container">
        <section className="justify-content">
          <div className="deskripsi text-center">
            <img src={logo} alt="bootstrap" />
            <p className=" fs-2 fw-semibold pt-5">{isIndonesian ? article.title.id : article.title.en}</p>
            <span className="fs-5 fw-lighter">{isIndonesian ? article.description.id : article.description.en}</span>
          </div>
          <div className={styles.inputForm}>
            <form action="" className="inputForm container-fluid m-5 " id="myForm">
              <h3 className="mb-3">Detail Product</h3>
              <div className="mb-3 col-md-6 col-sm-8">
                <label htmlFor="product_name" className="form-label has-validation">
                  Product Name
                </label>
                <input type="text" className="form-control" id="productName" value={productName} onChange={handleProductNameChange} />
                <div className="invalid-feedback">Product Name hanya berisi 10 karakter</div>
              </div>
              <div className="mb-3 col-md-4 col-sm-6 has-validation">
                <label htmlFor="product_category" className="form-label">
                  Product Category
                  <select name="product_category" className="form-select" id="product_category" required="">
                    <option selected="" disabled="" value="">
                      Pilih kategori produk
                    </option>
                    <option value={1}>Category 1</option>
                    <option value={2}>Category 2</option>
                    <option value={3}>Category 3</option>
                  </select>
                </label>
              </div>
              <div className="mb-3 col-md-4 col-sm-6 has-validation">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input type="file" name="image" className="form-control" id="image" required />
              </div>
              <div className="mb-3 col-md-4 col-sm-6 form-check has-validation">
                <label className="pb-1 form-label">Product Freshness</label>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="brandNew" name="radio-stacked" required="" />
                  <label htmlFor="brandNew" className="form-check-label">
                    Brand New
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="secondHand" name="radio-stacked" />
                  <label htmlFor="secondHand" className="form-check-label">
                    Second Hand
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="refurbished" name="radio-stacked" />
                  <label htmlFor="refurbished" className="form-check-label">
                    Refurbrished{' '}
                  </label>
                  <span id="nama-error" />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Additional Description</label>
                <textarea
                  style={{ width: 1000, height: 200 }}
                  className={`form-control rows={10} ${isProductDescValid ? '' : 'is-invalid'}`}
                  rows="3"
                  placeholder="Product Description"
                  onChange={(e) => {
                    setIsProductDescValid(e.target.value.length >= 10);
                  }}
                />
                {!isProductDescValid && <div className="invalid-feedback">Deskripsi minimal berisi 10 karakter</div>}
              </div>
              <div className="mb-5 has-validation">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <input type="number" name="price" className="form-control" id="product_price" placeholder="$1" required="" />
                <span id="nama-error" />
              </div>
              <Button label="Submit" />
              <Button label="Angka Random" onClick={handleClick} />
            </form>
          </div>
        </section>
      </div>
      <div className="container">
        <h2 className="text-center fw-bold fs-2">List Product</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">product category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="tabel_data" />
        </table>
        <input type="text" className="form-control w-25 mb-3" id="search" placeholder="Search..." />
        <button className="btn btn-danger" id="delete">
          Delete
        </button>
        <button className="btn btn-primary" id="searchBtn">
          Search
        </button>
        <br />
        <br />
      </div>
    </>
  );
}
