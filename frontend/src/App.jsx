import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import './app.css';

function App() {
    return (
        <div className="box">
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/create' element={<CreatePage />} />
            </Routes>
        </div>
    );
}

export default App;