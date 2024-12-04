import React, { useState } from "react";
import passport from "../../assets/blake-guidry-jXxdtXFEjcc-unsplash.jpg";
import plane from "../../assets/forsaken-films-7cfcCOOXsIo-unsplash.jpg";
import fly from "../../assets/sugarman-joe-4Xz4EGLwm9o-unsplash.jpg"
import "./banner.css";

const Banner = () => {
    const slides = [
        {
            image: fly,
            title: "visa navigator",
            description: "Visa navigator is a private institution that handles all matters related to visas and immigration. The primary role of a visa office is to process visa applications, provide information on visa requirements, and assist applicants in navigating the often complex visa application process.",
            buttonText: "Learn More",
            isBig: true, 
        },
        {
            image: plane,
            title: "Fly High",
            description: "Experience the joy of flying to your dream destinations.",
            buttonText: "Book Now",
            isBig: false,
        },
        {
            image: passport,
            title: "Explore the World",
            description: "Discover new places and adventures with ease.",
            buttonText: "Learn More",
            isBig: false,
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    
    
    return (
        <div className="slider">
        <div className="image-container h-[300px] md:h-[400px] lg:h-[600px] w-full">
            <button className="prev-btn" onClick={handlePrev}>Prev</button>
    
            {/* Apply the big-slide class to the image for the "Fly" slide */}
            <img 
                src={slides[currentIndex].image} 
                alt="slider" 
            />
    
             <div className="slide-overlay">
             <h2 className={`font-bold ${slides[currentIndex].isBig ? "text-5xl pt-24 pb-4" : "text-3xl"}`}>{slides[currentIndex].title}</h2>
               <p className={`${slides[currentIndex].isBig ? " pb-4" : ""}`}>{slides[currentIndex].description}</p>
               <button className="slider-button">{slides[currentIndex].buttonText}</button>
             </div>

    
            <button className="next-btn" onClick={handleNext}>Next</button>
        </div>
    
        <div className="dots-container mb-2">
            {slides.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                ></span>
            ))}
        </div>
    </div>
    
    );
};

export default Banner;
