import data from '../createProduct/dataProduct';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostDetailPage = () => {
  const { id } = useParams();
  const product = data.find((item) => item.id === id);
  return (
    <div>
      <h1>{product.productName}</h1>
      <h3>Category : {product.productCategory}</h3>
      <img className="w-25" src={product.image} />
      <p>
        <b>Product Freshness :</b>
        {product.productFreshness}
      </p>
      <p>{product.productDescription}</p>
      <h2>Price : {product.productPrice}</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default PostDetailPage;
