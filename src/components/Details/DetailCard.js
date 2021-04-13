import React from 'react';
import Preloader from '../Preloader';

const DetailCard = ({ title, number, id, units, extraClass = '', children, isFetching }) => {
  return (
    <div className={`detail__item ${extraClass}`} >
      <div className="detail__item-title">{title}</div>
      <div className="detail__item-value"><span id={id}>{number} </span><small>{units}</small></div>
      {children}
      {isFetching && <Preloader />}
    </div >
  );
}

export default DetailCard;