import React from 'react';
import Navbar from '../Componentes/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Componentes/Footer/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
