import './styles/App.css';
import './styles/style.css';

import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import HomePage from './pages/HomePage';
import FooterComponent from './components/layout/FooterComponent';
import Featuring from './components/layout/Featuring';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Featuring />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}
export default App;
