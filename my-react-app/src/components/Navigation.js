import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  a {
    color: white;
    text-decoration: none;
    &.active {
      color: #ffd700;
    }
    &:hover {
      color: #ddd;
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <MenuList>
        <MenuItem>
          <NavLink to="/main" end>대시보드</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/main/products">상품관리</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/main/orders">주문관리</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/main/customers">고객관리</NavLink>
        </MenuItem>
      </MenuList>
    </Nav>
  );
}

export default Navigation;