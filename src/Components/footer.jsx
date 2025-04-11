import React from 'react'

function footer() {
    return (
        <footer className="footer footer-horizontal footer-center p-10 soraFont">
            <aside>
                <p className="font-bold text-2xl">
                   <span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337] font-bold'>Gallery</span>
                </p>
                <p className='flex gap-5 justify-center items-center text-xl'>
                    <h1>Bid.</h1>
                    <h1>Win.</h1>
                    <h1>Own.</h1>
                </p>

                <nav className="grid grid-flow-col gap-6 text-base">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auction</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How it works</a>
                </nav>

                <p>©2025 AuctionHub. All rights reserved.</p>
            </aside>
        </footer>
    )
}

export default footer