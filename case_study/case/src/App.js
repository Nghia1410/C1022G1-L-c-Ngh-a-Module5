import './App.css';
import FacilityList from './component/FacilityList';
import Header from './component/Header';
import Footer from './component/Footer';
import NavBar from './component/Navbar';
import ContractList from './component/ContractList';
import ContractCreate from './component/ContractCreate';
import CustomerCreate from './component/CustomerCreate';
import CustomerEdit from './component/CustomerEdit';
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <FacilityList />
      <Footer />
    </>
  );
}

export default App;
