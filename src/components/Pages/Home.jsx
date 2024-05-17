import React from 'react'
import Banner from "../Home/Banner"
import Contact from "../Home/Contact"
import Logo from "../Home/Logo"
import Plan from "../Home/Plan"
import Standout from "../Home/Standout"
import Welcome from "../Home/Welcome"
import Seprator from "../Constants/Seprator"
const Home = () => {
    return (
        <>
            <Banner />
            <Welcome />
            <Seprator />
            <Plan />
            <Standout />
            <Logo />
            <Contact />
        </>
    )
}

export default Home