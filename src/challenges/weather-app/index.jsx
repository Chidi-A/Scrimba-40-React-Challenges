import React from 'react';
import './style.css';
import weatherData from './weatherData';
import Weather from './Weather';

/* Challenge

The weather data is currently hardcoded into the JSX. Your task is to insert it via JavaScript so the app can be dynamic. 
      
    1. Based on whether the day is currently set to Monday, Tuesday, or Wednesday, the app should 
       use state to automatically display the correct items for the following:
        - background image
        - emoji icon (☀️, 🌧️, or ❄️)
        - weather condition
        - low & high temperatures
        - day of the week
    
    2. When you click on the test button, the app should show all of the correct items listed above 
       for the next day in the weatherData array, cycling through the pattern: Monday -> Tuesday -> Wednesday -> Monday, etc. 
    
    3. The weatherData array can be moved, but it should not be otherwise modified. 
       
    4. The code should be modular and well-organized. 
*/

export default function App() {
  const [currentDay, setCurrentDay] = React.useState(0);

  function handleTest() {
    setCurrentDay((prevDay) => (prevDay + 1) % weatherData.length);
  }

  const currentWeather = weatherData[currentDay];

  return (
    <div className="weather-app">
      <div
        className={`app-container ${currentWeather.condition.toLowerCase()}-background`}
      >
        <Weather currentWeather={currentWeather} />
        <button onClick={handleTest}>Test</button>
      </div>
    </div>
  );
}
