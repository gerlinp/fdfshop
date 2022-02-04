import React from 'react';
import Announcement from '../components/Announcement'
import Categories from '../components/Categories';
import MainNavBar from '../components/MainNavBar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
        <Announcement/>
        <MainNavBar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        </div>
    )
}

export default Home
