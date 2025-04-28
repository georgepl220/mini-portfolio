import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import MyCity from './pages/MyCity';
import MyFuture from './pages/MyFuture';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/my-city" element={<MyCity />} />
        <Route path="/my-future" element={<MyFuture />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
