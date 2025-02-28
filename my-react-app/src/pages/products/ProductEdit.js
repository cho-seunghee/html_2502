import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductForm.css';

function ProductEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    status: 'active'
  });

  useEffect(() => {
    // 기존 상품 정보 불러오기
    // 실제 구현시에는 API 호출
    const fetchProduct = async () => {
      try {
        // API 호출 예시
        // const response = await axios.get(`/api/products/${id}`);
        // const data = response.data;
        
        // 임시 데이터
        const mockData = {
          id: id,
          name: `상품 ${id}`,
          price: 10000,
          description: "상품 상세 설명입니다.",
          status: 'active'
        };

        setFormData(mockData);
        setLoading(false);
      } catch (err) {
        setError('상품 정보를 불러오는데 실패했습니다.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // API 호출 예시
      // await axios.put(`/api/products/${id}`, formData);
      
      // 성공 메시지 표시
      alert('상품이 성공적으로 수정되었습니다.');
      navigate(`/main/products/${id}`);
    } catch (err) {
      alert('상품 수정 중 오류가 발생했습니다.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    const confirmed = window.confirm('변경사항이 저장되지 않습니다. 취소하시겠습니까?');
    if (confirmed) {
      navigate(`/main/products/${id}`);
    }
  };

  if (loading) return <div className="loading">로딩중...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="product-form">
      <h3>상품 수정</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">상품명</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">설명</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">상태</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="active">판매중</option>
            <option value="inactive">판매중지</option>
            <option value="soldout">품절</option>
          </select>
        </div>

        <div className="button-group">
          <button type="submit" className="save-button">저장</button>
          <button 
            type="button" 
            className="cancel-button" 
            onClick={handleCancel}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductEdit;