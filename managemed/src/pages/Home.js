import './home.css'
import React ,  { useState, useEffect } from 'react';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF26p9bDPnpfa9rfL-ESQVLLJFGLSYEydw2g&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhl9M52gI85WkxMFuAj19MLZlCbKYaNoveg&s',
    'https://i0.1616.ro/media/2/2701/33586/20420158/1/whatsapp-image-2021-10-06-at-17-08-58.jpg?width=860',
    'https://spitalulconstanta.ro/wp-content/uploads/2022/01/spital-FB6-2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkAaAtz7JD3ip8x2PRIIOeElOt_XioVhhAtA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBAP3fQL4lZvZq9vmMn9_4jFEUGKH042zL9w&s',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <><div className="slideshow">
    <img
      src={slides[currentSlide]}
      alt={`Slide ${currentSlide + 1}`}
      style={{ width: '100%', height: 'auto' }}
      id='slideimg'
    />
  </div>
<div>
        <h1>Welcome to the ManageMed Application!</h1>
        <p>
          This application is designed to help medical professionals manage their patients' health data more efficiently.
        </p>
        <p>
          To get started, please login using your username and password.
        </p>
      </div></>
  );
}

export default Home;
