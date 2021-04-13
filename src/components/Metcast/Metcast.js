import React from 'react';
import { connect } from 'react-redux';
import ForecastDayCard from './ForecastDayCard';
import ForecastHourCard from './ForecastHourCard';


const Metcast = (props) => {
  const containerRef = React.useRef();

  const dailyRef = React.useRef();
  const hourlyRef = React.useRef();

  const dailyContentRef = React.useRef();
  const hourlyContentRef = React.useRef();

  const dailyInnerRef = React.useRef();
  const hourlyInnerRef = React.useRef();

  const prevRef = React.useRef();
  const nextRef = React.useRef();


  let cntDaily = 0;
  let cntHourly = 0;


  const onSwitchTabClick = e => {
    if (e.target.getAttribute('data-period') === 'daily') {
      dailyRef.current.classList.add('active');
      hourlyRef.current.classList.remove('active');
      dailyContentRef.current.classList.add('active');
      hourlyContentRef.current.classList.remove('active');
    } else {
      dailyRef.current.classList.remove('active');
      hourlyRef.current.classList.add('active');
      dailyContentRef.current.classList.remove('active');
      hourlyContentRef.current.classList.add('active');
    }
    nextRef.current.classList.remove('inactive');
    prevRef.current.classList.add('inactive');
    cntHourly = 0;
    cntDaily = 0;
    dailyInnerRef.current.style["margin-left"] = `0px`;
    hourlyInnerRef.current.style["margin-left"] = `0px`;
  }

  const renderDailyCards = () => {
    return props.daily.map((day, ind) => (ind === 0) ? null : <ForecastDayCard key={day.dt} weather={day.weather} dt={day.dt} temp={day.temp} ind={ind} isFetching={props.isFetching} />)
  };

  const renderHourlyCards = () => {
    const hourlyArray = [];

    for (let i = 0; i < 12; i++) {
      const day = props.hourly[i];
      hourlyArray.push(<ForecastHourCard key={day.dt} weather={day.weather} dt={day.dt} temp={day.temp} isFetching={props.isFetching} />)
    }
    return hourlyArray;
  };

  const onPrevClick = e => {
    if (cntDaily > 0) {
      cntDaily--;
      dailyInnerRef.current.style["margin-left"] = `-${124 * cntDaily}px`;
      nextRef.current.classList.remove('inactive');
      if (cntDaily === 0) {
        prevRef.current.classList.add('inactive');
      }
    }

    if (cntHourly > 0) {
      cntHourly--;
      hourlyInnerRef.current.style["margin-left"] = `-${124 * cntHourly}px`;
      nextRef.current.classList.remove('inactive');
      if (cntHourly === 0) {
        prevRef.current.classList.add('inactive');
      }
    }
  };

  const onNextClick = e => {
    const cardsCount = Math.ceil(parseInt(window.getComputedStyle(containerRef.current).width) / 124);
    console.log(cardsCount);
    console.log(window.getComputedStyle(containerRef.current).width);

    if (dailyContentRef.current.classList.contains('active')) {
      if (cntDaily < (7 - cardsCount)) {
        cntDaily++;
        dailyInnerRef.current.style["margin-left"] = `-${124 * cntDaily}px`;
        prevRef.current.classList.remove('inactive');
      } if (cntDaily === (7 - cardsCount)) {
        nextRef.current.classList.add('inactive');
      }
    } else {
      if (cntHourly < (12 - cardsCount)) {
        cntHourly++;
        hourlyInnerRef.current.style["margin-left"] = `-${124 * cntHourly}px`;
        prevRef.current.classList.remove('inactive');
        if (cntHourly === (12 - cardsCount)) {
          nextRef.current.classList.add('inactive');
        }
      }
    };
  };

  return (
    <section className="more__forecast forecast">
      <div className="container" ref={containerRef}>
        <div className="forecast__header">
          <h3 className="forecast__title title">Прогноз</h3>
          <div className="forecast__tabs">
            <div className="forecast__tab active" id='week' onClick={onSwitchTabClick} ref={dailyRef} data-period="daily">на неделю</div>
            <div className="forecast__tab" id='hour' onClick={onSwitchTabClick} ref={hourlyRef} data-period="hourly">почасовой</div>
          </div>
        </div>
        <div className="forecast__wrapper">
          <div className="forecast__arrows">
            <button className="forecast__arrows--prev inactive" onClick={onPrevClick} ref={prevRef}>
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3"
                  d="M12 14.5L2.87351 8.85026C2.24198 8.45932 2.24198 7.54068 2.87351 7.14973L12 1.5" stroke="#ACACAC"
                  strokeWidth="3" />
              </svg>
            </button>
            <button className="forecast__arrows--next" onClick={onNextClick} ref={nextRef}>
              <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.3" d="M1 1.5L10.1265 7.14974C10.758 7.54068 10.758 8.45932 10.1265 8.85027L1 14.5"
                  stroke="#ACACAC" strokeWidth="3" />
              </svg>
            </button>
          </div>
          <div className="forecast__content forecast__content--week active" ref={dailyContentRef}>
            <div className='forecast__inner' ref={dailyInnerRef}>
              {renderDailyCards()}
            </div>
          </div>
          <div className="forecast__content forecast__content--hour" ref={hourlyContentRef}>
            <div className='forecast__inner' ref={hourlyInnerRef}>
              {renderHourlyCards()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  daily: state.weather.daily,
  hourly: state.weather.hourly,
  isFetching: state.weather.isFetching
});

export default connect(mapStateToProps, null)(Metcast);