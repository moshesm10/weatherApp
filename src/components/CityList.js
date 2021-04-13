import React from 'react';

const CityList = (props) => {
  const renderCities = () => {
    return props.lastCities.map((city, ind) => (ind <= 4 && ind !== props.lastCities.length - 1)
      ? <li className="last-cities__item" onClick={() => { props.changeCity(city.name); props.onChangeOpen(); }}>{city.name}</li>
      : null);
  };

  return (
    <ul className="last-cities">
      {renderCities()}
    </ul>
  );
}

export default CityList;