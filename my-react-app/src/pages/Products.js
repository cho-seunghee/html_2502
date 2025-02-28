import '../styles/Products.css';

function Products() {
  const products = [
    { id: 1, name: "상품 1", price: 10000 },
    { id: 2, name: "상품 2", price: 20000 },
    { id: 3, name: "상품 3", price: 30000 },
  ];

  return (
    <div className="products-container">
      <h2>상품 관리</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>가격: ₩{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
/* styled 방식
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

function Products() {
  const products = [
    { id: 1, name: "상품 1", price: 10000 },
    { id: 2, name: "상품 2", price: 20000 },
    { id: 3, name: "상품 3", price: 30000 },
  ];

  return (
    <ProductsContainer>
      <h2>상품 관리</h2>
      <ProductList>
        {products.map(product => (
          <ProductCard key={product.id}>
            <h3>{product.name}</h3>
            <p>가격: ₩{product.price}</p>
          </ProductCard>
        ))}
      </ProductList>
    </ProductsContainer>
  );
}

export default Products;
*/