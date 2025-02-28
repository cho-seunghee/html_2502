import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      <Card>
        <h3>오늘의 통계</h3>
        <p>주문 수: 150</p>
        <p>매출액: ₩1,500,000</p>
      </Card>
    </DashboardContainer>
  );
}

export default Dashboard;