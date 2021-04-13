import React from 'react';

const WindIcon = (props) => {
  const directions = ['С', 'СВ', 'В', 'ЮВ', 'Ю', 'ЮЗ', 'З', 'СЗ'];
  const windDirection = directions[parseInt(props.deg / 45)];

  return (
    <div className="detail__item-wind-direction">
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: `rotate(${props.deg}deg)` }}>
        <circle cx="19" cy="19" r="19" fill="#48484A" />
        <path d="M8.86923 27.0341L17.3526 7.08441C17.6926 6.28486 18.8203 6.26943 19.182 7.05938L28.308 26.9874C28.6719 27.7822 27.9093 28.6352 27.0704 28.3896C20.6901 26.5219 16.3703 26.5561 10.1189 28.4078C9.29242 28.6526 8.53193 27.8273 8.86923 27.0341Z" fill="#E6E6E6" />
      </svg>
      <span>{windDirection}</span>
    </div>
  );
}

export default WindIcon;