import React from 'react';
import Details from './Details/Details';
import Metcast from './Metcast/Metcast';

const Main = (props) => {
  return (
    <div className="main">
      <div className="container">
        <Metcast />
        <Details />
      </div>
    </div>
  );
}

export default Main;