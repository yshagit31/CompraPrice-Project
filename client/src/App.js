import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Registration from './components/Registration';
import './App.css';
import Navbar from './components/Navbar';
import SearchHero from './pages/SearchHero';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './pages/About';
import Deals from './pages/Deals';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
function App() {
    return (
        <div className='main'>
        <Navbar></Navbar>
        <Router>
            <div className="App">
                <Routes>
                    {/* <Route path="/" element={<ProductList />} /> */}
                    <Route path="/" element={<SearchHero />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path='/about' element={<About/>}/>
                    <Route path='/deals' element={<Deals/>}/>
                    <Route path='/categories' element={<Categories/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/faq' element={<Faq/>}/>
                </Routes>
            </div>
        </Router>
        <Footer></Footer>
        </div>
    );
}

export default App;
