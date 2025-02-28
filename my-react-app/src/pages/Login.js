import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 실제 API 호출로 대체해야 합니다
      const response = await mockLoginApi(credentials);
      login(response);
      navigate('/main');
    } catch (error) {
      alert('로그인 실패');
    }
  };

  return (
    <LoginContainer>
      <h2>로그인</h2>
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="이메일"
          value={credentials.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button type="submit">로그인</Button>
      </LoginForm>
    </LoginContainer>
  );
}

// Mock API 함수
const mockLoginApi = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.email && credentials.password) {
        resolve({
          token: 'mock-token',
          user: {
            id: 1,
            email: credentials.email,
            name: '사용자'
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export default Login;