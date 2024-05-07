import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Home';
import Atv01 from './atv01/components/Atv01';
import Atv02 from './atv02/components/Atv02';

export default function minhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/atv01" element={<Atv01 />} />
            <Route path="/atv02" element={<Atv02 />} />
        </Routes>
        </BrowserRouter>
    );
}