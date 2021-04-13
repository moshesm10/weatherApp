import React from 'react';

const HumidityScale = (props) => {
  return (
    <div className='scale'>
      <div className='scale__values'>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
      <div className='scale__line'>
        <div className='scale__line-bg'></div>
        <div className='scale__line-color' style={{ width: `${props.humidityValue}%` }}></div>
      </div>
      <div className='scale__percent'>%</div>
    </div>
  );
}

export default HumidityScale;