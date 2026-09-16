import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Reproach from './pages/Home/Reproach';

import './style/App.css'
import './style/ReproachStyle.css'


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/reproachpage" element={<Reproach/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;