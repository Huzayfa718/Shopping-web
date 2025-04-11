import React from 'react';

function Banner() {
  return (
    <section
      className="w-full h-[80vh] bg-cover bg-center text-white text-center"
      style={{ backgroundImage: "url('https://i.ibb.co.com/Nd5MT1Rx/banner.jpg')" }}
    > 
      <div className="flex flex-col px-10 pt-50 w-1/2 h-3/4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bid On Unique Items from Around the World
        </h1>
        <p className="text-lg md:text-xl opacity-55">
          Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
        </p>
        <button className="btn btn-primary bg-white opacity-100 rounded-2xl text-black w-[200px]">Explore Auctions</button>
      </div>
    </section>
  );
}

export default Banner;
