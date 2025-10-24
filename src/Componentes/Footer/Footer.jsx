import React from 'react';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <div className='bg-[#001931]'>
            <footer className="w-11/12 mx-auto footer justify-between sm:footer-horizontal text-white  p-10 ">
                <aside>

                    <div className='flex justify-around items-center gap-2'>
                        <img className='w-10' src={logo} alt="" />
                        <a className=" text-xl text-blue-600 font-bold">HERO.IO</a>
                    </div>
                    <p>
                        HERO Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;