import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';




function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/signUp' exact element={<SignUp/>} />
        <Route path='/pricing' exact element={<Pricing/>} />
      </Routes>
    </Router>
  );
}

export default App;
