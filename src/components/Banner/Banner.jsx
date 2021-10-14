import React from 'react'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <h1>Best food Waiting For your Belly</h1>
            <div className="search-container mt-4">
            <input type="text" placeholder="Search food Items" />
            <button className="btn btn-danger">Search</button>
            </div>
        </div>
    )
}

export default Banner
