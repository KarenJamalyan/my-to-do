
import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage';
import AddTodo from './components/AddTodo/AddTodo';
import Navbar from './components/Navbar/Navbar';

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/add' element={<AddTodo />} />
      </Routes>
    </>
  );
}

export default App;
