import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<PrivateRoute><Main /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

/*
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';  // 제품 관련 메인 페이지
import ProductList from './pages/products/ProductList';
import ProductDetail from './pages/products/ProductDetail';
import ProductAdd from './pages/products/ProductAdd';
import ProductEdit from './pages/products/ProductEdit';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<PrivateRoute><Main /></PrivateRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />}>
              <Route index element={<ProductList />} />
              <Route path="add" element={<ProductAdd />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path=":id/edit" element={<ProductEdit />} />
            </Route>
            <Route path="orders" element={<Orders />} />
            <Route path="customers" element={<Customers />} />
          </Route>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
*/