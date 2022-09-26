
import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomePage from './components/Home/Home';
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
