import React from "react";
import "./Home.scss"
import Logo from '../../components/Logo'
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
    return(
        <div className="home">
            <div className="home-header">
            <Logo/>
            <Navigation/>
            </div>
        </div>
    );
};
export default Home;