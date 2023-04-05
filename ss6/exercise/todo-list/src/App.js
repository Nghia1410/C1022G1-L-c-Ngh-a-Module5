import './App.css';
import TodoList from './component/TodoList';
import CreateTodo from './component/CreateTodo';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <NavLink to='/'>Todo List</NavLink>
    <NavLink to='/create' className='ms-3'>Create</NavLink>
    <Routes>
        <Route path='/' element={<TodoList/>} />
        <Route path='/create' element={<CreateTodo/>} />
    </Routes>
    <ToastContainer />
</>
  );
}

export default App;
