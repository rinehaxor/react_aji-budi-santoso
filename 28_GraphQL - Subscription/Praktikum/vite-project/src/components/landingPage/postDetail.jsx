import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDetailPage = () => {
  const { id } = useParams();
  const url = `https://642bc710208dfe25471f3f59.mockapi.io/products/${id}`;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Terjadi kesalahan saat memuat data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, url]);

  if (loading) {
    return <p>Memuat...</p>;
  }

  if (error) {
    return <p>Terjadi kesalahan: {error.message}</p>;
  }

  const product = data;

  return (
    <div>
      <h1>{product.productName}</h1>
      <h3>Kategori : {product.productCategory}</h3>
      <img className="w-25" src={product.image} alt={product.productName} />
      <p>
        <b>Kesegaran Produk :</b>
        {product.productFreshness}
      </p>
      <p>{product.productDescription}</p>
      <h2>Harga : {product.productPrice}</h2>
      <Link to="/">Beranda</Link>
    </div>
  );
};

export default PostDetailPage;
