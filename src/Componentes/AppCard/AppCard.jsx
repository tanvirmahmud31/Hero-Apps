import React from 'react';
import download from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app;

    return (
        <div className="card bg-base-100 shadow-md w-11/12 mx-auto transition hover:shadow-lg">
            <figure className="w-full h-50 overflow-hidden">
                <img
                    className="w-full h-full "
                    src={image}
                    alt={title}
                />
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-base font-bold min-h-12">
                    {title}
                </h2>

                <div className="flex justify-between mt-3">
                    <div className="badge bg-white text-green-700 font-semibold gap-1 p-2 shadow-sm">
                        <img className='w-4' src={download} alt="" /> 
                        {downloads}
                    </div>

                    <div className="badge bg-white text-orange-900 font-semibold gap-1 p-2 shadow-sm">
                        <img className='w-4' src={rating} alt="" /> 
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;
