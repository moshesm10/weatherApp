import React from 'react';
import { getHour } from '../../functions/getDate';
import Preloader from '../Preloader';

const ForecastCard = ({ weather, dt, temp, isFetching }) => {
  return (
    <div className="forecast__content-item forecast-item">
      <div className="forecast-item__title">{getHour(dt)}:00</div>
      <div className="forecast-item__icon">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={`${weather[0].description}`} />
      </div>
      <div className="forecast-item__temp">{parseInt(temp)}°С</div>
      {isFetching && <Preloader />}
    </div>
  );
}

export default ForecastCard;