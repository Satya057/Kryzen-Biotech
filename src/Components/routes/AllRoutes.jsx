import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../account/Login';
import Signup from '../account/Signup';
import Profile from '../account/Profile';
import AllProducts from '../AllProducts/AllProducts';
import Cart from '../Cart/Cart';
import MyStore from '../MyStore/MyStore';
import RequiredAuth from '../RequiredAuth';

function AllRoutes() {
  return (
    <Routes>
      <Route path='/' element={<RequiredAuth><Home /></RequiredAuth>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/mystore' element={<RequiredAuth><MyStore /></RequiredAuth>} />
    </Routes>
  );
}

export default AllRoutes;
