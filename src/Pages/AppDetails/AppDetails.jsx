import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApp from '../../Hooks/useApp';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import icon from '../../assets/icon-downloads.png';
import rating from '../../assets/icon-ratings.png';
import review from '../../assets/icon-review.png';
import { addToStoreDB, getStoredApps } from '../../Utility/addToDB';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const { apps, loading } = useApp();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getStoredApps();
    setInstalled(installedApps.includes(appId));
  }, [appId]);

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;

  const singleApp = apps.find(app => app.id === appId);
  if (!singleApp) return <h2 className="text-center mt-10 text-2xl text-red-500">App Not Found 😢</h2>;

  const { image, title, downloads, ratingAvg, description, companyName, reviews, ratings, size } = singleApp;

  const handleInstall = () => {
    const success = addToStoreDB(appId);
    if (success) {
      setInstalled(true);
      toast.success(`"${title}" Installed Successfully!`);
    } else {
      toast.error(`"${title}" is already installed!`);
    }
  };

  return (
    <div className="w-11/12 max-w-5xl mx-auto mt-12 mb-10 flex flex-col gap-10">

      {/* App Info */}
      <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <figure className="flex justify-center w-full md:w-1/3 bg-gray-50 p-4 rounded-xl">
          <img className="w-full max-w-[250px] sm:max-w-[300px] md:max-w-full rounded-xl shadow-md" src={image} alt={title} />
        </figure>

        <div className="flex-1 space-y-3 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">{title}</h2>
          <p className="text-base sm:text-lg text-gray-700">
            Developed by <span className="font-semibold text-purple-700">{companyName}</span>
          </p>

          {/* Stats */}
          <div className="border-t-2 pt-4 flex flex-wrap justify-center sm:justify-between gap-4">
            <div className="flex flex-col items-center flex-1 min-w-[90px]">
              <img className="w-6 sm:w-7" src={icon} alt="downloads" />
              <p className="text-gray-600 text-xs sm:text-sm">Downloads</p>
              <h1 className="text-base sm:text-lg font-bold">{downloads.toLocaleString()}</h1>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[90px]">
              <img className="w-6 sm:w-7" src={rating} alt="rating" />
              <p className="text-gray-600 text-xs sm:text-sm">Avg Rating</p>
              <h1 className="text-base sm:text-lg font-bold">⭐ {ratingAvg}</h1>
            </div>
            <div className="flex flex-col items-center flex-1 min-w-[90px]">
              <img className="w-6 sm:w-7" src={review} alt="reviews" />
              <p className="text-gray-600 text-xs sm:text-sm">Reviews</p>
              <h1 className="text-base sm:text-lg font-bold">{reviews.toLocaleString()}</h1>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`btn px-5 py-3 rounded-xl font-semibold shadow mt-4 w-full sm:w-auto 
              ${installed ? "bg-green-600 text-white cursor-not-allowed" : "bg-linear-to-r from-purple-600 to-purple-500 text-white"}`}
          >
            {installed ? "Installed ✅" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold mb-4">Ratings</h3>
        <div className="w-full h-64 sm:h-72 min-h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" tick={{ fontSize: 12 }} />
              <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={80} />
              <Tooltip />
              <Bar dataKey="count" fill='#FF8811' barSize={18} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">Description</h3>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;
