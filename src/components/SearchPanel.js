import React from 'react';
import { connect } from 'react-redux';
import { changeCity } from '../actions'
import CityList from './CityList';
import Preloader from './Preloader';

const SearchPanel = ({ lastCities, error, changeCity, isPanelOpen, onChangeClose, isFetching }) => {

  const [inputVaue, setInputValue] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    changeCity(inputVaue);
    setInputValue('');
  };

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div id="search" className={`search ${isPanelOpen && 'search_opened'}`}>
      <div id="closeSearch" className="search__close" onClick={onChangeClose}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
            fill="#48484A" />
        </svg>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="hide">
          <path
            d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
            fill="#E6E6E6" />
        </svg>
      </div>
      <div>
        <form className="search__grid" onSubmit={e => e.preventDefault()}>
          <input type="text" className="search__input" placeholder="Москва" value={inputVaue} onChange={onInputChange} />
          <button className="search__button" type="button" onClick={onSubmit}>Найти</button>
          {error && <p className="error-text">{error}</p>}
        </form>
      </div>
      <div className="search__loader">
        {isFetching && <Preloader />}
      </div>
      <CityList lastCities={lastCities} changeCity={changeCity} />
    </div>
  );
};

const mapStateToProps = state => ({
  lastCities: state.cities.previousCities,
  error: state.cities.error,
  isFetching: state.weather.isFetching,
  isPanelOpen: state.settings.isSearchPanelOpen
});


export default connect(mapStateToProps, { changeCity })(SearchPanel);