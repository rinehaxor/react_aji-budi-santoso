import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GetProductList = gql`
  query Myquery {
    products {
      productName
      productCategory
      productFreshness
      productDescription
      productPrice
      image
    }
  }
`;

export default function ListProduct() {
  const { data, loading, error } = useQuery(GetProductList);

  if (loading) {
    console.log(loading);
    return 'loading';
  }

  if (error) {
    console.log(error);
    return null;
  }
  return (
    <div className="container mb-4">
      <h1>Product List</h1>
      <div className="flex d-flex">
        {data.products.slice(0, 3).map((datas) => (
          <div className="card w-25 m-5" key={datas.id}>
            <img src={datas.image} />
            <div className="card-body">
              <h3>{datas.productName}</h3>
              <p className="card-text">{datas.productDescription}</p>
              <div className="d-flex">
                <Link to={`/${datas.id}`} className=" border-opacity-50  text-secondary-emphasis text-decoration-none card-link border border-success p-1">
                  Detail View
                </Link>
                <p style={{ marginLeft: 100 }}>9 Min</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/product" className="text-white p-2 bg-primary text-decoration-none card-link border border-success p-1">
        Create Product
      </Link>
      <Link to="/list-product/" className="text-white p-2 bg-primary text-decoration-none card-link border border-success p-1" style={{ marginLeft: 1000 }}>
        Load More...
      </Link>
    </div>
  );
}
