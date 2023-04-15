import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BookList from './component/BookList';
import CreateBook from './component/CreateBook';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BookList />}> </Route>
          <Route path='/add' element={<CreateBook />}> </Route>
          {/* <Route path='/edit/:id' element={<EditBook />}> </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
