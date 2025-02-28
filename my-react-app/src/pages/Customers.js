import styled from 'styled-components';

const CustomersContainer = styled.div`
  padding: 20px;
`;

const CustomerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CustomerCard = styled.div`
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Customers() {
  const customers = [
    { id: 1, name: "김고객", email: "kim@example.com", orders: 5 },
    { id: 2, name: "이고객", email: "lee@example.com", orders: 3 },
  ];

  return (
    <CustomersContainer>
      <h2>고객 관리</h2>
      <CustomerList>
        {customers.map(customer => (
          <CustomerCard key={customer.id}>
            <h3>{customer.name}</h3>
            <p>이메일: {customer.email}</p>
            <p>총 주문수: {customer.orders}</p>
          </CustomerCard>
        ))}
      </CustomerList>
    </CustomersContainer>
  );
}

export default Customers;