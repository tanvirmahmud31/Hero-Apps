import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa6";
import { NavLink } from 'react-router';
import hero from '../../assets/hero.png';
import useApp from '../../Hooks/useApp';
import AppCard from '../../Componentes/AppCard/AppCard';

const Home = () => {
    const { apps } = useApp();

    const appFeture = apps.slice(0, 8);
    return (
        <div className="flex flex-col">


            <section className='bg-[#D2D2D2] text-center flex flex-col justify-center items-center pt-8 px-4'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold mt-4'>
                    We Build <br />
                    <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive
                    </span> Apps
                </h1>

                <p className='mt-4 text-[#627382] mb-7 text-sm sm:text-base md:text-lg max-w-2xl'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                    <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 w-full max-w-md">

                    <a
                        href="https://play.google.com/store/games?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <button className="btn btn-outline font-bold flex items-center gap-2 w-full sm:w-auto justify-center">
                            <IoLogoGooglePlaystore /> Google Play
                        </button>

                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"

                    >
                        <button className="btn btn-outline font-bold flex items-center gap-2 w-full sm:w-auto justify-center">
                            <FaAppStoreIos /> App Store
                        </button>

                    </a>


                </div>

                <div className='w-full flex justify-center'>
                    <img
                        className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]'
                        src={hero}
                        alt="Hero banner"
                    />
                </div>
            </section>


            <section className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-10 sm:p-20'>
                <h1 className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10'>
                    Trusted by Millions, Built for You
                </h1>

                <div className='flex flex-col sm:flex-row justify-around items-center gap-10 text-white'>
                    <div className='space-y-2 text-center'>
                        <p className='text-sm sm:text-base'>Total Downloads</p>
                        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>29.6M</h1>
                        <p className='text-sm sm:text-base'>21% more than last month</p>
                    </div>

                    <div className='space-y-2 text-center'>
                        <p className='text-sm sm:text-base'>Total Reviews</p>
                        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>906K</h1>
                        <p className='text-sm sm:text-base'>46% more than last month</p>
                    </div>

                    <div className='space-y-2 text-center'>
                        <p className='text-sm sm:text-base'>Active Apps</p>
                        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>132+</h1>
                        <p className='text-sm sm:text-base'>31 more will Launch</p>
                    </div>
                </div>
            </section>

            <div>
                <div className='text-center mt-6 space-y-2'>
                    <h1 className='text-3xl font-extrabold'>Trending Apps</h1>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='w-11/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                    {
                        appFeture.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
                <div className="flex justify-center mt-6 mb-6">
                    <NavLink to={'/apps'}>
                        <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white '>Show All</button>
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Home;
