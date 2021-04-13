import React from 'react';
import moon from '../img/moon.png';
import moon_dark from '../img/moon-dark.png';

import SearchPanel from './SearchPanel';
import { connect } from 'react-redux';
import { getDay } from '../functions/getDate';
import { toggleSearchPanel } from '../actions/index';


const Sidebar = ({ current, currentCity, changeTheme, toggleSearchPanel }) => {

  const lightButtonRef = React.useRef();
  const darkButtonRef = React.useRef();


  const onChangeOpen = () => {
    toggleSearchPanel(true);
  };

  const onChangeClose = () => {
    toggleSearchPanel(false);
  };

  const onChangeTheme = e => {
    if (e.target.parentElement.parentElement.classList.contains('now__change-theme-button--light') || e.target.classList.contains('now__change-theme-button--light')) {
      lightButtonRef.current.classList.add('hide');
      darkButtonRef.current.classList.remove('hide');
    } else {
      lightButtonRef.current.classList.remove('hide');
      darkButtonRef.current.classList.add('hide');
    }
    changeTheme();
  };

  if (current) {
    return (
      <>
        <SearchPanel onChangeClose={onChangeClose} />
        <div className="now__wrapper">
          <div className="now__bg"></div>
          <div className="now">
            <div className="now__btns-wrapper">
              <button id="openSearch" className="now__search-button" onClick={onChangeOpen}>
                Поиск города
            </button>
              <button className="now__change-theme-button now__change-theme-button--light" onClick={onChangeTheme} ref={lightButtonRef}>
                <div className="now__change-theme-button__icon-wrapper">
                  <img src={moon} className="now__change-theme-button-icon" alt='light' />
                </div>
              </button>
              <button className="now__change-theme-button now__change-theme-button--dark hide" onClick={onChangeTheme} ref={darkButtonRef}>
                <div className="now__change-theme-button__icon-wrapper now__change-theme-button__icon-wrapper--dark-theme">
                  <img src={moon_dark} className="now__change-theme-button-icon" alt='dark' />
                </div>
              </button>
            </div>

            <div className="now__icon">
              <img className="now__icon-img" src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`} alt="" />
            </div>
            <div className="now__description">
              <div className="now__temperature">
                <h2 className="now__temperature-title">{Math.floor(current.temp)}</h2>
                <span className="now__temperature-unit">°C</span>
              </div>
              <div className="now__fallout">{current.weather[0].description}</div>
              <div className="now__feeling">Ощущается как {Math.floor(current.feels_like)}°C</div>
            </div>
            <div className="now__time">
              <div className="now__time-day">Сегодня</div>
              <div className="now__time-date">{getDay()}</div>
            </div>
            <div className="now__point">
              <svg width="24" height="34" viewBox="0 0 24 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9999 0.333344C5.54992 0.333344 0.333252 5.55001 0.333252 12C0.333252 20.75 11.9999 33.6667 11.9999 33.6667C11.9999 33.6667 23.6666 20.75 23.6666 12C23.6666 5.55001 18.4499 0.333344 11.9999 0.333344ZM11.9999 16.1667C10.8949 16.1667 9.83504 15.7277 9.05364 14.9463C8.27224 14.1649 7.83325 13.1051 7.83325 12C7.83325 10.8949 8.27224 9.83513 9.05364 9.05373C9.83504 8.27233 10.8949 7.83334 11.9999 7.83334C13.105 7.83334 14.1648 8.27233 14.9462 9.05373C15.7276 9.83513 16.1666 10.8949 16.1666 12C16.1666 13.1051 15.7276 14.1649 14.9462 14.9463C14.1648 15.7277 13.105 16.1667 11.9999 16.1667Z"
                  fill="#EC6E4D" />
              </svg>
              <span className="now__point-title">{currentCity}</span>
            </div>
          </div>
        </div>
      </>

    );
  } else {
    return null;
  }

};

const mapStateToProps = state => ({
  current: state.weather.current,
  currentCity: state.cities.currentCity.namedetails['name:ru'] || state.cities.currentCity.namedetails.name,
  isFetching: state.weather.isFetching,
  error: state.cities.error
});

export default connect(mapStateToProps, { toggleSearchPanel })(Sidebar);