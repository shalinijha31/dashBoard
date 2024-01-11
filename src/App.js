import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import AddProducts from './Components/AddProducts';
import UpdateProducts from './Components/UpdateProducts';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import Logout from './Components/Logout';
import RegistrationForm from './Components/RegistrationForm'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Products" element={<div><Products /></div>} />
          <Route path="/AddProducts" element={<div><AddProducts /></div>} />
          <Route path="/UpdateProducts" element={<div><UpdateProducts /></div>} />
          <Route path="/Profile" element={<div><Profile /></div>} />
          <Route path="/SignUp" element={<div><SignUp /></div>} />
          <Route path="/Logout" element={<div><Logout /></div>} />
        </Routes>
        <RegistrationForm />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
