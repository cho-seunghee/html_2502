import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductForm.css';

function ProductAdd() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // API 호출 또는 데이터 저장 로직
    console.log('추가된 상품:', formData);
    navigate('/products');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="product-form-container">
      <h2>상품 추가</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">가격</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button type="submit">저장</button>
          <button type="button" onClick={() => navigate('/products')}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;