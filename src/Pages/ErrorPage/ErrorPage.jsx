import React from 'react';
import { useNavigate } from "react-router";
import error from '../../assets/error-404.png';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-5 bg-gray-100">
            <img 
                className="w-64 sm:w-80 md:w-96 mb-6" 
                src={error} 
                alt="404 Error" 
            />

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                Oops! Page Not Found 😢
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-md">
                The page you are looking for might have been removed or is temporarily unavailable.
            </p>

            <button 
                onClick={() => navigate(-1)}
                className="btn bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
            >
                Go Back
            </button>
        </div>
    );
};

export default ErrorPage;
