import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.scss';
import LanguageSelector from './LanguageSelector';
import tintinImage from './Assets/lostintint.png'; 
import calvinImage from './Assets/CestCalvin.png'; 

const Homepage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDescription(true);
      } else {
        setShowDescription(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // This return statement correctly removes the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // This effect should only run if 'showDescription' is true.
    if (showDescription) {
      const end = 76;
      const interval = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter < end) {
            return prevCounter + 1;
          } else {
            clearInterval(interval);
            return prevCounter;
          }
        });
      }, 40); // Adjust the interval for the counter speed
    }
  }, [showDescription]); // Depend on 'showDescription' to start counter

  return (
    <div className="homepage">
      <nav className="top-right-nav">
        <Link to="/login" className="login-button">Log In</Link>
      </nav>

      <main className={`main-content ${fadeIn ? 'fade-in' : ''}`}>
        <h1 className="headline">Say 'Goodbye' to Google Translate 👋</h1>
        <p className="subtitle">
          Why do you waste your time? Why? Instead, spend those weekly
          <span className="highlight"> 7 </span>
          hours on learning German🇩🇪
        </p>
      </main>

      <LanguageSelector />

      <div className="its-free">
        <p>If it was not free, then why would you even stay?</p>
        </div>
       
        <div className="the-emojis"> 
        <p>📘 🇫🇷 👈 🤳📱</p>
      </div>

        <div className="image-text-wrapper">
          <div className="image-item">
            <img src={tintinImage} alt="Tintin" className="responsive-image" />
            <p>Even Tintin gets lost in Germany 🇩🇪, he knows, but he is not fluent enough.</p>
          </div>
          <div className="image-item">
            <p>Si Calvin le peut, vous le pouvez aussi!</p>
            <img src={calvinImage} alt="Calvin and Hobbes" className="responsive-image" />
          </div>
        </div>

        <div>
          <p className="big-line">STOP scrolling, START learning, so you can be basically fluent in A1 level of Italian 🇮🇹</p>
          <p className="counter">
            {counter}% of People in this generation spend 9 hours per week on Social media! Why don't you use it to learn a new language in those hours in 2 months?!
          </p>
        </div>
       

      <footer className="footer">
        <p>© 2024 Fluentique. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
