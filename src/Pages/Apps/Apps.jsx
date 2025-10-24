import React, { useState } from 'react';
import useApp from '../../Hooks/useApp';
import AppCard from '../../Componentes/AppCard/AppCard';
import { IoMdSearch } from "react-icons/io";

const Apps = () => {
    const { apps } = useApp();
    const [search, setSearchApps] = useState('');
    const term = search.trim().toLowerCase();
    const searchedApp = term ? apps.filter(app => app.title.toLowerCase().includes(term)) : apps;
    //console.log(searchedApp)
    return (
        <div className='w-11/12 mx-auto'>
            <div className='text-center mt-5 space-y-2'>
                <h1 className='text-4xl font-bold'>Our All Applications</h1>
                <p>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between items-center flex-wrap gap-3 mt-4'>

                <h1 className='font-bold text-2xl'>
                    <span>({searchedApp.length})</span> Apps Found
                </h1>

            
                <div className="relative w-full sm:w-80">
                    
                    <IoMdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 z-10" size={20} />

                 
                    <input
                        value={search}
                        onChange={(e) => setSearchApps(e.target.value)}
                        type="search"
                        placeholder="Search Apps..."
                        className="border border-gray-300 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:border-purple-600"
                    />
                </div>


            </div>

            <div className=' mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    searchedApp.map(app => <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;