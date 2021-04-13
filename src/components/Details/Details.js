import React from 'react';
import { connect } from 'react-redux';
import DetailCard from './DetailCard';
import HumidityScale from './HumidityScale';
import WindIcon from './WindIcon';

const Details = ({ current, isFetching }) => {
  return (
    <section className="detail">
      <div className="detail__title">Подробно на сегодня</div>
      <div className="detail__grid">
        <DetailCard title="Скорость ветра" id="windSpeedValue" number={parseInt(current.wind_speed)} units="м/с" isFetching={isFetching}>
          <WindIcon deg={current.wind_deg} />
        </DetailCard>
        <DetailCard title="Влажность" id="humidityValue" number={current.humidity} units="%" isFetching={isFetching}>
          <HumidityScale humidityValue={current.humidity} />
        </DetailCard>
        <DetailCard title="Видимость" id="visibilityValue" number={current.visibility / 1000} units="км" isFetching={isFetching} />
        <DetailCard title="Давление" id="pressureValue" number={parseInt(current.pressure / 133.3 * 100)} units="мм рт. ст." extraClass="detail__item_pressure" isFetching={isFetching} />
      </div>
    </section>
  );
};

const mapStateToProps = state => ({
  current: state.weather.current,
  isFetching: state.weather.isFetching
});

export default connect(mapStateToProps)(Details);