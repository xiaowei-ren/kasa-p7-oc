import React from 'react';
import {BrowserRouter, redirect, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Propos from './pages/Propos';
import Logement from './pages/Logement';
import Error from './pages/Error';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <main>
                <Routes>
                    <Route path= "/" element={<Home />} />
                    <Route path= "/Propos" element={<Propos />} />
                    <Route path= "/Logement/:id" element={<Logement />} />
                    <Route path= "*" element={<Error />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
};

export default App;