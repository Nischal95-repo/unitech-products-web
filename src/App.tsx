import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './modules/HomeScreen';
import NavBar from './components/shared/NavBar';
import ContactUsScreen from './modules/ContactUsScreen';
import AboutUsScreen from './modules/AboutUs';
import ProductScreen from './modules/ProductScreen';
import ProductDetailScreen from './modules/ProductDetailScreen';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: 70}}>
      <Routes>
      <Route  path='/' element={<HomeScreen />} />
        <Route path='/home' element={<HomeScreen />} />
        
        <Route path='/1' element={<ProductDetailScreen />} />
        <Route path='/products' element={<ProductScreen />} />
        <Route path='/about' element={<AboutUsScreen />} />
        <Route path='/contact' element={<ContactUsScreen />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
