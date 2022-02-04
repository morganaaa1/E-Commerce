import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

    const Home = () => {
    return(
        <div>
            <Announcement></Announcement>
            <Navbar/>
            <Slider />
        </div>
    )
};

export default Home;
