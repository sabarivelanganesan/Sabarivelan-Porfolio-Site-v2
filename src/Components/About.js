import React from "react";

const About = () => {
    const linkedinLink = "https://www.linkedin.com/in/sabarivelan-ganesan/";

    const handleConnectingLinkedIn() {
        window.open(linkedinLink, "_blank", "noopener,noreferrer);
    };

    const handleContact() {
        // Todo
    }
     
    return (
        <div className="pr-4 md:pr-40">
            <h4 className="text-base md:text-lg">Software Developer</h4>
            <h2 className="text-xl md:text-3xl font-bold">Sabarivelan Ganesan</h2>

            <div className="mt-4">
                <p className="text-sm md:text-base">
                    I am a dedicated front-end web developer with three years of experience. My passion lies in creating visually stunning and user-friendly websites that provide exceptional user experiences. My focus is on blending aesthetics and functionality to craft engaging online journeys that captivate and inspire visitors.
                </p>
            </div>

            <div className="mt-4">
                <button className="mr-2 mb-2 md:mb-0" onclick={handleContact}>Let's talk</button>
                <button onclick={handleConnectingLinkedIn}>Connect on LinkedIn</button>
            </div>
        </div>
    )
}

export default About;
