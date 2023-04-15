import { gql, useQuery, useMutation } from '@apollo/client';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import styles from '../createProduct/CreateProduct.module.css';
import Button from '../Button';
import logo from '../../assets/logo.png';

const GetProductList = gql`
  query Myquery {
    products {
      id
      productName
      productCategory
      productFreshness
      productPrice
      image
    }
  }
`;
const CREATE_PRODUCT = gql`
  mutation CreateProduct($productName: String!, $productCategory: String!, $productFreshness: String!, $productPrice: Int!) {
    insert_products_one(object: { productName: $productName, productCategory: $productCategory, productFreshness: $productFreshness, productPrice: $productPrice }) {
      id
      productName
      productCategory
      productFreshness
      productPrice
    }
  }
`;
const DELETE_PRODUCT = gql`
  mutation MyMutation($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
      productName
      productCategory
      productFreshness
      productDescription
      productPrice
      image
    }
  }
`;

const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($id: uuid!, $productName: String!, $productCategory: String!, $productFreshness: String!, $productDescription: String, $productPrice: Int!) {
    update_products_by_pk(pk_columns: { id: $id }, _set: { productName: $productName, productCategory: $productCategory, productFreshness: $productFreshness, productDescription: $productDescription, productPrice: $productPrice }) {
      id
      productName
      productCategory
      productFreshness
      productDescription
      productPrice
    }
  }
`;
export default function Products() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });

  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = () => {
    const inputValue = document.getElementById('search').value;
    setSearchTerm(inputValue);
  };

  const GetProductList = gql`
    query Myquery($searchTerm: String!) {
      products(where: { productName: { _ilike: $searchTerm } }) {
        id
        productName
        productCategory
        productFreshness
        productPrice
        image
      }
    }
  `;

  const { data, loading, error, refetch } = useQuery(GetProductList, {
    variables: { searchTerm: `%${searchTerm}%` },
  });

  useEffect(() => {
    if (editingProduct) {
      setValue('productName', editingProduct.productName);
      setValue('productCategory', editingProduct.productCategory);
      setValue('productFreshness', editingProduct.productFreshness);
      setValue('productDescription', editingProduct.productDescription);
      setValue('productPrice', editingProduct.productPrice);
    }
  }, [editingProduct]);

  const handleCreateProduct = async (data) => {
    try {
      const { productName, productCategory, productFreshness, productPrice } = data;

      await createProduct({
        variables: {
          productName,
          productCategory,
          productFreshness,

          productPrice,
        },
      });

      refetch();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct({ variables: { id } });
      // Refetch data setelah menghapus produk
      refetch();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleUpdateProduct = async (data) => {
    try {
      const { productName, productCategory, productFreshness, productDescription, productPrice, image } = data;
      const id = '7f9d96b6-da3c-4a27-a61f-2c8b36e86a5f';
      setEditingProduct(data);
      await updateProduct({
        variables: {
          id,
          productName,
          productCategory,
          productFreshness,
          productDescription,
          productPrice,
          image,
        },
      });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  if (loading) {
    console.log(loading);
    return null;
  }

  if (error) {
    console.log(error);
    return null;
  }
  return (
    <>
      <div className="container">
        <section className="justify-content">
          <div className={styles.inputForm}>
            <input type="text" className="form-control w-25 mb-3" id="search" placeholder="Cari produk..." />

            <button className="btn btn-primary" onClick={onSearch}>
              Cari
            </button>

            <form action="" className="inputForm container-fluid m-5" id="myForm" data-testid="form" onSubmit={handleSubmit(editingProduct ? handleUpdateProduct : handleCreateProduct)}>
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
            {data.products.map((datas, id) => (
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
                  <Button className="btn btn-danger" onClick={() => handleDelete(datas.id)}>
                    Delete
                  </Button>
                  <Button className="btn btn-success" onClick={() => handleUpdateProduct(datas)}>
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
