import React from 'react';
import { getDay } from '../../functions/getDate';
import Preloader from '../Preloader';

const ForecastCard = ({ weather, dt, temp, ind, isFetching }) => {
  return (
    <div className="forecast__content-item forecast-item">
      <div className="forecast-item__title">{ind === 1 ? 'Завтра' : getDay(dt * 1000)}</div>
      <div className="forecast-item__icon">
        <img src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={`${weather[0].description}`} />
      </div>
      <div className="forecast-item__temp">
        <div className="forecast-item__temp-max">{parseInt(temp.max)}<span>°C</span></div>
        <div className="forecast-item__temp-min">{parseInt(temp.min)}°С</div>
      </div>
      {isFetching && <Preloader />}
    </div>
  );
}

export default ForecastCard;