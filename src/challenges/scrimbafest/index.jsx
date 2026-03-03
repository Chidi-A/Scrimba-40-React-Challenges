import React from 'react';
import festivalData from './data/festivalData';
import BuyTickets from './components/BuyTickets';
import Footer from './components/Footer';
import PosterSection from './components/PosterSection';
import './style.css';

export default function App() {
  return (
    <div className="scrimbafest">
      <div className="wrapper">
        <h1>ScrimbaFest</h1>

        <PosterSection date="July 1" festivalData={festivalData} />

        <PosterSection date="July 2" festivalData={festivalData} />

        <PosterSection date="July 3" festivalData={festivalData} />

        <BuyTickets />
        <Footer />
      </div>
    </div>
  );
}
