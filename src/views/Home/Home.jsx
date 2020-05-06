import React from "react";
import "./Home.scss"
import Logo from '../../components/Logo'
import Navigation from "../../components/Navigation/Navigation";

const Home = () => {
    return(
        <div className="home">
            <Logo/>
            <Navigation/>
        </div>
    );
};
export default Home;