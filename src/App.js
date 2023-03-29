import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AboutPage from './pages/AboutPage';




function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/signUp' exact element={<SignUp/>} />
        <Route path='/pricing' exact element={<Pricing/>} />
        <Route path='/About' exact element={<AboutPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
