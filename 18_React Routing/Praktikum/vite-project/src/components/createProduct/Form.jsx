import styles from '../createProduct/CreateProduct.module.css';
import Button from '../Button';
import logo from '../../assets/logo.png';
import { article } from '../../bahasaDeskripsi';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Form() {
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
  const [data, setData] = useState([
    {
      id: '1',
      productName: 'Anggur',
      productCategory: 'category 2',
      image: 'https://asset.kompas.com/crops/5GyMRPruMju3CIF9hmZv5wv8K9U=/102x66:898x598/750x500/data/photo/2022/08/15/62f9fd394d072.jpg',
      productFreshness: 'brandNew',
      productDescription: 'Anggur merupakan buah yang diolah dari telur buah berupa perdu merambat yang termasuk ke dalam keluarga Vitaceae. ',
      productPrice: '2',
    },
    {
      id: '2',
      productName: 'Nanas',
      productCategory: 'category 3',
      image: 'https://www.parenting.co.id/img/images/253b3c596eaf8a85218b34f5082e80e8.jpg',
      productFreshness: 'brandNew',
      productDescription: 'Apel merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon ape',
      productPrice: '2',
    },
    {
      id: '3',
      productName: 'Apel',
      productCategory: 'category 1',
      image: 'https://www.astronauts.id/blog/wp-content/uploads/2023/01/Ini-Manfaat-Buah-Apel-Untuk-Kesehatan.jpg',
      productFreshness: 'seconHand',
      productDescription: 'Apel merupakan jenis buah-buahan, atau buah yang dihasilkan dari pohon ape',
      productPrice: '2',
    },
  ]);
  const [formData, setFormData] = useState({
    id: '',
    productName: '',
    productCategory: '',
    image: '',
    productFreshness: '',
    productDescription: '',
    productPrice: '',
  });

  //validasi input form productname
  const maxInputProductName = 10;
  const handleProductName = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const { value } = event.target;
    if (value.length <= maxInputProductName) {
      event.target.classList.remove('is-invalid');
    } else {
      event.target.classList.add('is-invalid');
    }
  };

  //validasi input product deskripsi
  const minInputProductDesc = 10;
  const handleDeskripsi = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const { value } = event.target;
    if (value.length >= minInputProductDesc) {
      event.target.classList.remove('is-invalid');
    } else {
      event.target.classList.add('is-invalid');
    }
  };

  //validasi input prodct pirce
  const minInputProductPrice = 0;
  const handleProductPrice = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    const { value } = event.target;
    if (value.length >= minInputProductPrice) {
      event.target.classList.remove('is-invalid');
    } else {
      event.target.classList.add('is-invalid');
    }
  };

  //handle untuk mengambil data input user
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // state untuk mengedit
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEditing) {
      const newData = data.map((item) => {
        if (item.id === formData.id) {
          return formData;
        } else {
          return item;
        }
      });

      setData(newData);
      setIsEditing(false);
    } else {
      setData([...data, { ...formData, id: data.length + 1 }]);
    }
  };
  //handle untuk mengedit data
  const handleEdit = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus data ini?')) {
      const newData = data.filter((item) => item.id !== id);
      setData(newData);
    }
  };
  console.log(data);
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
            <form action="" className="inputForm container-fluid m-5" onSubmit={handleSubmit} id="myForm">
              <h3 className="mb-3">Detail Product</h3>
              <div className="mb-3 col-md-6 col-sm-8">
                <label htmlFor="product_name" className="form-label has-validation">
                  Product Name
                </label>
                <input type="text" className="form-control" name="productName" id="productName" value={formData.productName} onChange={handleProductName} />
                <div className="invalid-feedback">Product Name hanya berisi 10 karakter</div>
              </div>
              <div className="mb-3 col-md-4 col-sm-6 has-validation">
                <label htmlFor="productCategory" className="form-label">
                  Product Category
                  <select name="productCategory" defaultValue="category1" className="form-select" id="productCategory" value={formData.productCategory} onChange={handleChange} required>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
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
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="brandNew" name="productFreshness" required="" onChange={handleChange} />
                  <label htmlFor="brandNew" className="form-check-label">
                    Brand New
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="secondHand" name="productFreshness" onChange={handleChange} />
                  <label htmlFor="secondHand" className="form-check-label">
                    Second Hand
                  </label>
                  <span id="nama-error" />
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" id="product_freshness" defaultValue="refurbished" name="productFreshness" onChange={handleChange} />
                  <label htmlFor="refurbished" className="form-check-label">
                    Refurbrished{' '}
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Additional Description</label>
                <textarea style={{ width: 1000, height: 200 }} name="productDescription" className={`form-control ${'is-invalid'}`} rows="3" placeholder="Product Description" onChange={handleDeskripsi} />
                {<div className="invalid-feedback">Deskripsi minimal berisi 10 karakter</div>}
              </div>
              <div className="mb-5 has-validation">
                <label htmlFor="productPrice" className="form-label">
                  Product Price
                </label>
                <input type="number" name="productPrice" id="product_price" placeholder="$1" required className={`form-control ${'is-invalid'}`} onChange={handleProductPrice} />
                {<div className="invalid-feedback">Price harus di isi</div>}
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link className="text-decoration-none" to={`/${item.id}`}>
                    {item.id}
                  </Link>
                </td>
                <td>{item.productName}</td>
                <td>{item.productCategory}</td>
                <td>{item.productFreshness}</td>
                <td>{item.productPrice}</td>
                <td>
                  <Button className="btn btn-danger" onClick={() => handleDelete(item.id)} label="Delete" />
                  <Button className="btn btn-success" onClick={() => handleEdit(item)} label="Edit" />
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
