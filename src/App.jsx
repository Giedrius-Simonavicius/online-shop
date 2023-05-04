import './styles/App.css';
import './styles/style.css';

import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/layout/HeaderComponent';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default App;
