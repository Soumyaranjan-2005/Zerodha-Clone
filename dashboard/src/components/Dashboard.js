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
        <button 
          type="button"
          className="watchlist-toggle d-lg-none"
          onClick={() => setShowWatchlist(!showWatchlist)}
        >
          {showWatchlist ? 'Hide Watchlist' : 'Show Watchlist'}
        </button>
        
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
