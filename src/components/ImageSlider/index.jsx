import React, { useState, useEffect } from "react";
import image1 from "../../asset/HUST1.jpg";
import image2 from "../../asset/HUST2.jpg";
import image3 from "../../asset/HUST3.jpg";
import "./index.css";
const ImageSlider = () => {
    const images = [image1, image2, image3];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [images.length]);

    return (
        <div className="image-slider">
            <div className="image-items">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        style={{ display: index === currentImageIndex ? "flex" : "none" }}
                        className="image-item"
                    />
                ))}
            </div>
            <div className="image-orders">
                {images.map((item, index) => (
                    <li
                        className="image-order"
                        style={{
                            opacity: index === currentImageIndex ? "0.5" : "0.2",
                        }}
                        key={index}
                    ></li>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
