import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from '../createProduct/CreateProduct.module.css';
import Button from '../Button';
import logo from '../../assets/logo.png';
import { article } from '../../bahasaDeskripsi';
import useFetch from '../../hooks/useFetch';

import axios from 'axios';

export default function Form() {
  const [data, reloadData] = useFetch();
  const [editing, setEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const editProduct = (data) => {
    setEditing(true);
    setCurrentProduct(data);
  };
  const BASE_URL = 'https://642bc710208dfe25471f3f59.mockapi.io/products';

  const updateProduct = async (data) => {
    try {
      const response = await axios.put(`${BASE_URL}/${currentProduct.id}`, data);
      console.log(response.data);
      setEditing(false);
      setCurrentProduct(null);
      reloadData();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (editing && currentProduct) {
      reset(currentProduct);
    }
  }, [editing, currentProduct, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${BASE_URL}`, data);
      console.log(response.data);
      reloadData();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      reloadData();
    } catch (error) {
      console.error(error);
    }
  };

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
            <form action="" className="inputForm container-fluid m-5" onSubmit={handleSubmit(editing ? updateProduct : onSubmit)} id="myForm" data-testid="form">
              <h3 className="mb-3">Detail Product</h3>
              <div className="mb-3 col-md-6 col-sm-8">
                <label htmlFor="product_name" className="form-label has-validation">
                  Product Name
                </label>
                <input
                  id="product-name"
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
                  data-testid="product-name-input"
                />
                <div data-testid="name-error" id="productNameFeedback" className="form-text text-danger">
                  {errors.productName && errors.productName.message}
                </div>
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
                <input className="form-control" type="file" id="formFile" />
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
            {data.map((datas, id) => (
              <tr key={id}>
                <td>
                  <Link className="text-decoration-none" to={`/${datas.id}`}>
                    {datas.id}
                  </Link>
                </td>
                <td>{datas.productName}</td>
                <td>{datas.productCategory}</td>
                <td>{datas.productFreshness}</td>
                <td>{datas.productPrice}</td>
                <td>
                  <Button className="btn btn-danger" onClick={() => deleteProduct(datas.id)}>
                    Delete
                  </Button>
                  <Button className="btn btn-success" onClick={() => editProduct(datas)}>
                    Edit
                  </Button>
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
