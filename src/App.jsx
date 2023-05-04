import './styles/App.css';
import '../dist/output.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/layout/header';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
