import React, { useState } from 'react';
import './HomeScreen.css';
import kingshomescreenphoto from '../../../assets/kingshomescreenphoto.jpg';
import kingshandymanworkphoto from '../../../assets/kingshandyman.jpg';
import kingspaintingdecoratingphoto from '../../../assets/kingspaintingdecorating.jpg';
import kingsgardeningphoto from '../../../assets/kingsgardening.jpg';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
  const navigate = useNavigate();

  const reviews = [
    {
      text: "Kings was great. He did everything I wanted and more.",
      author: "Mark, Staines",
      rating: 5,
    },
    {
      text: "Excellent service! Will definitely recommend.",
      author: "Sarah, London",
      rating: 5,
    },
    {
      text: "Professional and reliable. A pleasure to work with.",
      author: "John, Reading",
      rating: 5,
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="home-screen">
      {/* Section 1 */}
      <div className="relative w-full h-[50vh] bg-cover bg-center text-center text-white" style={{ backgroundImage: `url(${kingshomescreenphoto})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">Kings Building & Maintenance</h1>
          <p className="text-2xl">Professional handyman services in Hampshire</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-20 px-8 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-8">About Our Services</h2>
        <p className="text-lg mb-4">Kings Building & Maintenance provides an exceptional service to cater to all your needs. Our services range from everyday handy man work to large scale rennovation projects.</p>
        <p className="text-lg mb-4">We operate around Hampshire, and pride ourselves on always doing exactly what our clients wish for.</p>
        <p className="text-lg">If you want someone to fit a tap, do your garden timber flooring, or paint the walls in your home; Kings Building & Maintance have got your covered. </p>
      </div>

      {/* Section Separator */}
      <hr className="border-t-2 border-black shadow-lg" />

      {/* Section 3 */}
      <div className="bg-white py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="service-card">
            <img src={kingshandymanworkphoto} alt="Handyman Work" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Handyman Work</h3>
            <p className="text-lg mb-4">If you need handyman work, we've got you covered. From floorboards to tiling, we can do it.</p>
          </div>
          <div className="service-card">
            <img src={kingspaintingdecoratingphoto} alt="Painting & Decorating" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Painting & Decorating</h3>
            <p className="text-lg mb-4">Professional painting and decorating for homes and offices.</p>
          </div>
          <div className="service-card">
            <img src={kingsgardeningphoto} alt="Landscaping & Gardens" className="w-full h-64 object-cover mb-4 rounded-lg" />
            <h3 className="text-2xl font-semibold mb-2">Landscaping & Gardens</h3>
            <p className="text-lg mb-4">Transform your garden into a beautiful outdoor space.</p>
          </div>
        </div>
        <button onClick={() => navigate('/about')} className="mt-8 bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-all">
          Read More
        </button>
      </div>

      {/* Section Separator */}
      <hr className="border-t-2 border-black shadow-lg" />

      {/* Section 4 */}
      <div className="bg-white py-20 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Think</h2>
        <div className="review-container">
          <button className="review-button" onClick={handlePrevReview}>&#10094;</button>
          <div className="review-slide">
            <p className="text-2xl mb-4 text-center">“{reviews[currentReviewIndex].text}”</p>
            <div className="text-yellow-500 mb-4 text-center">
              {'★'.repeat(reviews[currentReviewIndex].rating)}
            </div>
            <p className="text-lg text-gray-500 text-center">{reviews[currentReviewIndex].author}</p>
          </div>
          <button className="review-button" onClick={handleNextReview}>&#10095;</button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
