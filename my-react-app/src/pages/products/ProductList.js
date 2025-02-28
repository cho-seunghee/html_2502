import { useNavigate, Link } from 'react-router-dom';
import '../styles/ProductList.css';

function ProductList() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "상품1", price: 10000 },
    { id: 2, name: "상품2", price: 20000 },
  ];

  return (
    <div className="product-list-container">
      <div className="product-header">
        <h2>상품 목록</h2>
        <button 
          className="add-button"
          onClick={() => navigate('/products/add')}
        >
          상품 추가
        </button>
      </div>

      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>₩{product.price}</p>
            <div className="product-actions">
              <Link to={`/products/${product.id}`}>상세보기</Link>
              <Link to={`/products/${product.id}/edit`}>수정</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;