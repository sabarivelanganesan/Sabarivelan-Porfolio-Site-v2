import React from "react";
import imageSabari from '../images/sabari.jpg'; 
import About from '../Components/About';

const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8 mt-8 md:mt-12">
            <div className="w-full md:w-80 h-80 md:relative">
                <img 
                    src={imageSabari} 
                    alt="Sabarivelan Ganesan" 
                    className="w-full h-full md:absolute top-0 left-0 rounded-full" 
                />
            </div>
            <div className="col-span-2">
                <About />
            </div>
        </div>
    )
}

export default Home;
