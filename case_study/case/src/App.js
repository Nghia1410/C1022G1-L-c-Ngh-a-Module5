import './App.css';
import FacilityList from './component/FacilityList';
import Header from './component/Header';
import Footer from './component/Footer';
import NavBar from './component/Navbar';
import ContractList from './component/ContractList';
import CustomerCreate from './component/CustomerCreate';
import CustomerEdit from './component/CustomerEdit';
import CustomerList from './component/CustomerList';
import FacilityCreate from './component/FacilityCreate';
import FacilityEdit from './component/FacilityEdit';
import Contract from './component/Contract';
import ContractCreate from './component/ContractCreate';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          {/* HOME */}
          <Route path='/' element={<Home />} />
          {/* FACILITY */}
          <Route path='/facility' element={<FacilityList />} />
          <Route path='/edit' element={<FacilityEdit />} />
          <Route path='/add' element={<FacilityCreate />} />
          {/* CONTRACT */}
          <Route path='/contract' element={<ContractList />} />
          <Route path='/addContract' element={<ContractCreate />} />
          {/* CUSTOMER */}
          <Route path='/addCustomer' element={<CustomerCreate />} />
          <Route path='/customer' element={<CustomerList />} />
          <Route path='/editCustomer' element={<CustomerEdit />} />






        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
