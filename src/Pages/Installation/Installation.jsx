import React, { useEffect, useState } from 'react';
import { getStoredApps } from '../../Utility/addToDB';
import useApp from '../../Hooks/useApp';
import InstallCard from '../../Componentes/InstallCard/InstallCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Installation = () => {
    const { apps, loading } = useApp();
    const [installList, setInstallList] = useState([]);
    const [sort, setSort] = useState("");

    const parseDownloadsSimple = (str) => {
        return parseFloat(str);
    }

    useEffect(() => {
        const storedAppIds = getStoredApps();
        const convertedIds = storedAppIds.map(id => Number(id));

        const installedApps = apps.filter(app =>
            convertedIds.includes(app.id)
        );

        setInstallList(installedApps);
    }, [apps]);

    const handleUninstall = (id, title) => {
        setInstallList(prev => prev.filter(app => app.id !== id));
        toast.success(`✅ "${title}" uninstalled successfully!`);
    };

    const handleSort = (type) => {
        setSort(type);

        if(type === "Low-High"){
            const sortedList = [...installList].sort(
                (a,b) => parseDownloadsSimple(a.downloads) - parseDownloadsSimple(b.downloads)
            );
            setInstallList(sortedList);
        }
        if(type === "High-Low"){
            const sortedList = [...installList].sort(
                (a,b) => parseDownloadsSimple(b.downloads) - parseDownloadsSimple(a.downloads)
            );
            setInstallList(sortedList);
        }
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-20">
                <span className="loading loading-ring loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className='text-center'>
                <h2 className="text-3xl font-bold mb-4">Your Installed Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex justify-between items-center'>
                <h1 className='font-bold text-2xl'>{installList.length} apps found</h1>
                <details className="dropdown text-center mb-4">
                    <summary className="btn m-1">Sort By Size : {sort? sort: " "} </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=>handleSort("Low-High")}>Low-High</a></li>
                        <li><a onClick={()=>handleSort("High-Low")}>High-Low</a></li>
                    </ul>
                </details>
            </div>

            {installList.length === 0 ? (
                <p className="text-center text-gray-500 text-xl">
                     No apps installed yet!
                </p>
            ) : (
                <div className="grid grid-cols-1 gap-6">
                    {installList.map(app => (
                        <InstallCard 
                            key={app.id} 
                            app={app} 
                            onUninstall={handleUninstall} 
                        />
                    ))}
                </div>
            )}

            <ToastContainer />
        </div>
    );
};

export default Installation;
