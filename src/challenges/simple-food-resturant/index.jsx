import React from 'react';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import ImageContainer from './components/ImageContainer';
import Footer from './components/Footer';
import './style.css';

export default function ChallengeSimpleFoodResturant() {
  return (
    <div className="simple-food-resturant">
      <Header />
      <MainContainer />
      <ImageContainer />
      <Footer />
    </div>
  );
}
