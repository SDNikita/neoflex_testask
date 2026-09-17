import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Reproach from './pages/Home/Reproach';

import './style/App.css'
import './style/ReproachStyle.css'
import addToCart from './scripts/addToCart';

function App() {

    const[cart,setCart] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home cart={cart} addToCart={addToCart} setCart={setCart}/>} />
                <Route path="/reproachpage" element={<Reproach cart={cart}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;