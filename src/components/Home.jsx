import React from 'react'
import Banner from "./Banner"
import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Logo from "./Logo"
import Plan from "./Plan"
import Seprator from "./Seprator"
import Standout from "./Standout"
import Welcome from "./Welcome"
const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <Welcome />
            <Seprator />
            <Plan />
            <Standout />
            <Logo />
            <Contact />
            <Footer />
        </>
    )
}

export default Home