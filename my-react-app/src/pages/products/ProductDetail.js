import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams(); // URL 파라미터 가져오기
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // API 호출 또는 데이터 가져오기
    // 예시 데이터
    setProduct({
      id: id,
      name: "상품" + id,
      price: 10000,
      description: "상품 설명..."
    });
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail-container">
      <h2>{product.name} 상세정보</h2>
      <div className="product-info">
        <p>가격: ₩{product.price}</p>
        <p>설명: {product.description}</p>
      </div>
      <div className="action-buttons">
        <button onClick={() => navigate(`/products/${id}/edit`)}>
          수정하기
        </button>
        <button onClick={() => navigate('/products')}>
          목록으로
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;