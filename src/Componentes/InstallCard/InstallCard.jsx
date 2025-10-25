import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import { removeFromStoreDB } from '../../Utility/addToDB';

const InstallCard = ({ app, onUninstall }) => {
    const { image, title, downloads, ratingAvg, size, id } = app;

    const handleUninstall = () => {
        removeFromStoreDB(id); 
        onUninstall(id, title); 
    }

    return (
        <div className="card bg-base-100 shadow-sm flex flex-col sm:flex-row mb-4 rounded-lg overflow-hidden relative">
            
            <figure className="sm:w-40 w-full flex justify-center items-center p-4 bg-gray-50">
                <img className="w-32 sm:w-full rounded-lg" src={image} alt={title} />
            </figure>

          
            <div className="flex-1 p-4 flex flex-col justify-center">
                <h2 className="card-title text-xl font-bold mb-3">{title}</h2>
                
                <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-1 items-center">
                        <img className="w-4" src={download} alt="downloads" />
                        <span className="text-green-600">{downloads}</span>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img className="w-4" src={rating} alt="rating" />
                        <span className="text-orange-700">{ratingAvg}</span>
                    </div>
                    <div className="text-gray-600">{size} MB</div>
                </div>
            </div>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <button onClick={handleUninstall} className="btn btn-error text-white">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstallCard;
