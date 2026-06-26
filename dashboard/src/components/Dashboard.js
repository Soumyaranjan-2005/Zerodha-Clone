import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [showWatchlist, setShowWatchlist] = useState(false);

  useEffect(() => {
    const handleCloseWatchlist = () => {
      setShowWatchlist(false);
    };

    window.addEventListener('closeWatchlist', handleCloseWatchlist);
    return () => {
      window.removeEventListener('closeWatchlist', handleCloseWatchlist);
    };
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        {/* Mobile toggle button */}
        <button 
          className="watchlist-toggle d-lg-none"
          onClick={() => setShowWatchlist(!showWatchlist)}
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            zIndex: 1000,
            padding: '10px 15px',
            borderRadius: '50px',
            backgroundColor: '#4184f3',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}
        >
          {showWatchlist ? 'Hide Watchlist' : 'Show Watchlist'}
        </button>
        
        {/* Watchlist with mobile visibility toggle */}
        <div className={`watchlist-wrapper ${showWatchlist ? 'show' : ''}`}>
          <WatchList />
        </div>
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
