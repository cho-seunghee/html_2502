import styled from 'styled-components';

const OrdersContainer = styled.div`
  padding: 20px;
`;

const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
`;

function Orders() {
  const orders = [
    { id: 1, customer: "김고객", product: "상품 1", status: "배송완료" },
    { id: 2, customer: "이고객", product: "상품 2", status: "배송중" },
  ];

  return (
    <OrdersContainer>
      <h2>주문 관리</h2>
      <OrderTable>
        <thead>
          <tr>
            <th>주문번호</th>
            <th>고객명</th>
            <th>상품명</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </OrderTable>
    </OrdersContainer>
  );
}

export default Orders;