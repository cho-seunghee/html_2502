import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css';

function Main() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="main-container">
      <header className="main-header">
        <h1>관리자 페이지</h1>
        <button className="logout-button" onClick={handleLogout}>
          로그아웃
        </button>
      </header>
      <Navigation />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
/* styled 방식
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MainContainer = styled.div`
  min-height: 100vh;
`;

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.main`
  padding: 20px;
`;

const LogoutButton = styled.button`
  padding: 8px 16px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

function Main() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <MainContainer>
      <Header>
        <h1>관리자 페이지</h1>
        <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
      </Header>
      <Navigation />
      <Content>
        <Outlet />
      </Content>
    </MainContainer>
  );
}

export default Main;
*/