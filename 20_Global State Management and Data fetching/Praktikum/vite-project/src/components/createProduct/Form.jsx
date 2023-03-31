import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from '../createProduct/CreateProduct.module.css';
import Button from '../Button';
import logo from '../../assets/logo.png';
import { article } from '../../bahasaDeskripsi';
import { useDispatch, useSelector } from 'react-redux';

export default function Form() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);
  const imageRef = useRef(null);
  const inputImageRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = (data) => {
    dispatch({ type: 'ADD_DATA', payload: { ...data, id: new Date().getTime() } });
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_DATA', payload: id });
  };

  const handleEdit = (id) => {
    const editedData = formData.find((data) => data.id === id);
    reset(editedData);
    dispatch({ type: 'EDIT_DATA', payload: id });
  };

  //alert untuk salam welcome
  useEffect(() => {
    alert('Welcome');
  }, []);

  //handle random angka console
  function clickNomerAcak(e) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Nomor acak: ' + randomNumber);
    e.preventDefault();
  }
  //state ganti bahasa
  const [isIndonesia, setIsIndonesia] = useState('');

  //handle ganti bahasa
  const handleGantiBahasa = () => {
    setIsIndonesia(!isIndonesia);
  };

  //state untuk data di tabel

  return (
    <>
      <button className="btn btn-primary" onClick={handleGantiBahasa}>
        {isIndonesia ? 'EN' : 'ID'}
      </button>
      <div className="container">
        <section className="justify-content">
          <div className="deskripsi text-center">
            <img src={logo} alt="bootstrap" />
            <p className=" fs-2 fw-semibold pt-5">{isIndonesia ? article.title.id : article.title.en}</p>
            <span className="fs-5 fw-lighter">{isIndonesia ? article.description.id : article.description.en}</span>
          </div>
          <div className={styles.inputForm}>
            <form action="" className="inputForm container-fluid m-5" onSubmit={handleSubmit(onSubmit)} id="myForm">
              <h3 className="mb-3">Detail Product</h3>
              <div className="mb-3 col-md-6 col-sm-8">
                <label htmlFor="product_name" className="form-label has-validation">
                  Product Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  {...register('productName', {
                    required: 'productName harus diisi',
                    maxLength: {
                      value: 10,
                      message: 'minimal 10 karakter',
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: 'productName tidak mengandung simbol',
                    },
                  })}
                  aria-describedby="productNameHelp"
                />
                <div className="form-text text-danger">{errors.productName && errors.productName.message}</div>
              </div>
              <div className="mb-3 col-md-4 col-sm-6 has-validation">
                <label htmlFor="productCategory" className="form-label">
                  Product Category
                  <select
                    {...register('productCategory', {
                      required: 'harus di isi',
                    })}
                    name="productCategory"
                    defaultValue="category1"
                    className="form-select"
                    id="productCategory"
                    value={formData.productCategory}
                    required
                  >
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
                </label>
                <div className="form-text text-danger">{errors.productCategory && errors.productCategory.message}</div>
              </div>
              <div className="mb-3 col-md-4 col-sm-6">
                <label htmlFor="formFile" className="form-label">
                  Image
                </label>
                <input className="form-control" type="file" id="formFile" ref={inputImageRef} />
                <img src="" width={300} ref={imageRef} />
              </div>
              <div className="mb-3 col-md-4 col-sm-6 form-check has-validation">
                <label className="pb-1 form-label">Product Freshness</label>
                <div className="form-check">
                  <input
                    type="radio"
                    {...register('productFreshness', {
                      required: 'harus di isi',
                    })}
                    className="form-check-input"
                    id="product_freshness"
                    defaultValue="brandNew"
                    name="productFreshness"
                    required=""
                  />
                  <label htmlFor="brandNew" className="form-check-label">
                    Brand New
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    {...register('productFreshness', {
                      required: 'harus di isi',
                    })}
                    className="form-check-input"
                    id="product_freshness"
                    defaultValue="secondHand"
                    name="productFreshness"
                  />
                  <label htmlFor="secondHand" className="form-check-label">
                    Second Hand
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    {...register('productFreshness', {
                      required: 'harus di isi',
                    })}
                    className="form-check-input"
                    id="product_freshness"
                    defaultValue="refurbished"
                    name="productFreshness"
                  />
                  <label htmlFor="refurbished" className="form-check-label">
                    Refurbrished{' '}
                  </label>
                </div>
                <div className="form-text text-danger">{errors.productFreshness && errors.productFreshness.message}</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Additional Description</label>
                <textarea style={{ width: 1000, height: 200 }} name="productDescription" className={`form-control `} rows="3" placeholder="Product Description" />
                {<div className="invalid-feedback">Deskripsi minimal berisi 10 karakter</div>}
              </div>
              <div className="mb-5 has-validation">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <input
                  type="number"
                  name="productPrice"
                  id="product_price"
                  placeholder="$1"
                  required
                  {...register('productPrice', {
                    required: 'harus di isi',
                  })}
                  className="form-control"
                />
                <div className="form-text text-danger">{errors.productPrice && errors.productPrice.message}</div>
              </div>
              <Button label="Submit" className="btn btn-primary w-100 mb-5" />
            </form>
            <Button label="Angka Random" className="btn btn-success" onClick={clickNomerAcak} />
          </div>
        </section>
      </div>
      <div className="container">
        <h2 className="text-center fw-bold fs-2">List Product</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product Name</th>
              <th scope="col">product category</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, id) => (
              <tr key={id}>
                <td>
                  <Link className="text-decoration-none" to={`/${data.id}`}>
                    {data.id}
                  </Link>
                </td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productPrice}</td>
                <td>
                  <Button className="btn btn-danger" onClick={() => handleDelete(data.id)} label="Delete" />
                  <Button className="btn btn-success" onClick={() => handleEdit(data.id)} label="Edit" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <input type="text" className="form-control w-25 mb-3" id="search" placeholder="Search..." />

        <br />
        <br />
      </div>
    </>
  );
}
