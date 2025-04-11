import React, { useState, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Body() {
  const [auctions, setAuctions] = useState([]);
  const [likedAuctions, setLikedAuctions] = useState({});

  useEffect(() => {
    fetch('/jason.json')
      .then((response) => response.json())
      .then((data) => setAuctions(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleHeartClick = (auctionId) => {
    const auction = auctions.find((a) => a.id === auctionId);
    setLikedAuctions((prev) => ({
      ...prev,
      [auctionId]: auction
    }));
    toast.success(`${auction.title} added to favorites`);
  };

  const handleRemoveFavorite = (auctionId) => {
    const auction = likedAuctions[auctionId];
    setLikedAuctions((prev) => {
      const updated = { ...prev };
      delete updated[auctionId];
      return updated;
    });
    toast.warn(`${auction.title} removed from favorites`);
  };

  const totalPrice = Object.values(likedAuctions).reduce(
    (sum, item) => sum + item.currentBidPrice,
    0
  );

  return (
    <div className="px-10 py-5">
      <ToastContainer position="top-right" autoClose={2000} />
      
      <h1 className="text-2xl font-bold text-[rgba(14,41,84,1)]">Active Auctions</h1>
      <br />
      <p>Discover and bid on extraordinary items</p>
      <br />
      <div className="flex flex-row justify-between gap-5">
        {/* Auction Table */}
        <table className="w-3/4 bg-white border border-gray-300 text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3 border-b">Items</th>
              <th className="px-6 py-3 border-b">Current Bid</th>
              <th className="px-6 py-3 border-b">Time Left</th>
              <th className="px-6 py-3 border-b">Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {auctions.length > 0 ? (
              auctions.map((auction) => (
                <tr key={auction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b">
                    <div className="flex items-center">
                      <img
                        src={`/${auction.image}`}
                        alt={auction.title}
                        className="w-16 h-16 object-cover mr-4"
                      />
                      {auction.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b">${auction.currentBidPrice}</td>
                  <td className="px-6 py-4 border-b">{auction.timeLeft}</td>
                  <td className="px-6 py-4 border-b">
                    <button
                      id={`button-${auction.id}`}
                      onClick={() => handleHeartClick(auction.id)}
                      disabled={likedAuctions[auction.id]}
                      className={`btn bg-none ${
                        likedAuctions[auction.id]
                          ? 'cursor-not-allowed'
                          : 'cursor-pointer'
                      }`}
                    >
                      {likedAuctions[auction.id] ? (
                        <FaHeart size="25" className="text-red-500" />
                      ) : (
                        <CiHeart size="25" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-4 text-center">
                  Loading Auctions...
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Favorite List */}
        <div className="flex flex-col items-center p-5 w-1/4 bg-gray-100 rounded-lg shadow-md h-auto">
          <div className="flex items-center gap-2">
            <CiHeart size="30" />
            <h1 className="text-2xl font-bold">Favorite Items</h1>
          </div>
          <br />
          <div id="favorite-list" className="w-full">
            {Object.keys(likedAuctions).length > 0 ? (
              Object.values(likedAuctions).map((auction) => (
                <div
                  key={auction.id}
                  className="flex flex-row justify-between items-center w-full py-2"
                >
                  <div className="flex items-center">
                    <img
                      src={`/${auction.image}`}
                      alt={auction.title}
                      className="w-16 h-16 object-cover mr-4"
                    />
                    <span>{auction.title}</span>
                  </div>
                  <span>Bids: {auction.bidsCount + 1}  </span>
                  <span>Price : {auction.currentBidPrice}$  </span>
                  
                  <button
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleRemoveFavorite(auction.id)}
                  >
                    <MdDelete size="25" />
                  </button>
                </div>
              ))
            ) : (
              <h1 className="text-xl">You have no favorite items yet.</h1>
            )}
          </div>

          <hr className="w-full border-t border-dashed border-gray-400 my-6" />

          <div
            id="total-show"
            className="items-center w-full flex flex-col py-4"
          >
            <h1 className="text-2xl font-bold">Total: ${totalPrice}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
