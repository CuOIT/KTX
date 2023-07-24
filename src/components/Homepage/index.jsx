import React from "react";
import ImageSlider from "../ImageSlider";
import Notification from "../Notification";
import "./index.css";
const HomePage = () => {
    return (
        <div className="homepage-container">
            <ImageSlider />
            <div className="homepage-noti">
                <Notification />
            </div>
        </div>
    );
};
export default HomePage;
