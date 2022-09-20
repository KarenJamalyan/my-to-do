
import './App.css';
import { Routes, Route} from 'react-router-dom';
import AddListPage from './pages/addListPage';
import HomePage from './pages/homePage';

function App() {


  return (
    <Routes>
      <Route path='/add' element={<AddListPage />} />
      <Route path='/' element={<HomePage />} />
    </Routes>
  );
}

export default App;
