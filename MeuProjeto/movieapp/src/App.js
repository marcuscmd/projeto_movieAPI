import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContexto';
import { Home } from "./screens/Home/Home";
import { Welcome } from './screens/Welcome';


export function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
