import React, { useState } from 'react';
import './aboutusscreen.css';
import kingsaboutusphoto from '../../../assets/kingsaboutus.jpg';
import kingsaboutusmiddle from '../../../assets/kingsaboutusmiddle.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUsScreen = () => {
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
      <div className="relative w-full h-[50vh] bg-cover bg-center text-center text-white" style={{ backgroundImage: `url(${kingsaboutusphoto})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-2xl">A team you rely on.</p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-white py-20 px-8 md:px-20">
        <p className="text-lg mb-4">Hi, we're Kings Building & Maintenance - a professional handyman service helping busy homeowners with repairs and maintenance. Operated by Kingsley Hallett and Martin Shooglenickle, our combined 30+ years experience makes us experts in our craft. But along with our experience and expertise, we have a genuine passion for the work we do, with our sole purpose being to make peoples that little bit easier.</p>
        <p className="text-lg mb-4">We both worked at the same company, doing important maintenance jobs for people. And one day we thought, "why not do it ourselves." So here we are.</p>
        <p className="text-lg">After identifying a local need in Hampshire for affordable maintenance and handyman work, we have worked with over 100 clients, all of which are extremely happy with our service. We've renovated houses, built garden decking, painted new homes, and much more. </p>
      </div>

      {/* Section Separator */}
      <hr className="border-t-2 border-black shadow-lg" />

{/* Section 3 */}
<div className="bg-white py-20 px-8 md:px-20 flex flex-col md:flex-row items-center gap-12">
  <div className="flex-1">
    <h2 className="text-3xl font-bold mb-8">Why Use Kings Building and Maintenance?</h2>
    <ul className="list-disc list-inside space-y-2 text-lg mb-4">
      <li>Struggling to balance family time with your career whilst simultaneously maintaining a comfortable and beautiful home?</li>
      <li>Overwhelmed by your home maintenance to-do list?</li>
      <li>Experiencing physical difficulties that are making it harder to keep up with house work?</li>
    </ul>
    <p className="text-lg">If so, you've come to the right place! Whether you need decking fitted outside, or a shed built, or your living room painted, we've got you covered. Hiring a handyman is a cost and time effective way of keeping your home exactly how you want it, removing the frustration.</p>
    <br />
    <p className="text-lg">All you have to do is {' '}
      <a href="mailto:kingsbuildingmaintenance@gmail.com?subject=Maintenance%20Request" className="bg-orange-500 text-white py-1 px-4 rounded-lg hover:bg-orange-700 transition-all">Email Us</a> and we'll give you a free quote!
    </p>
  </div>

  <div className="flex-1">
    <img src={kingsaboutusmiddle} alt="About Us" className="rounded-lg shadow-lg w-full" />
  </div>
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

export default AboutUsScreen;