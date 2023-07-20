import React from 'react'
import Header from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Products from '../Products/Products'

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <div className='product-card-container'>
                <Products />
            </div>
        </>
    )
}

export default Home