import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 

import Home from './Home';
import Atv01 from './atv01/components/Atv01';
import Atv02 from './atv02/components/Atv02';

export default function MinhasRotas() {
    return (
        <div>
            <div className="menu">
                <a href="/">Home</a>
                <a href="/atv01">Atividade 01</a>
                <a href="/atv02">Atividade 02</a>
        </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/atv01" element={<Atv01 />} />
                    <Route path="/atv02" element={<Atv02 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
