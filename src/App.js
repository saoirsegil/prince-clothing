import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Authentication from './routes/authentication/Authentication.jsx'
import Shop from '../src/routes/shop/Shop.jsx'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
