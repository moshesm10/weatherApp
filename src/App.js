import React from 'react';
import './App.css';
import './normalize.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import { changeCity, changeTheme } from './actions';
import { connect } from 'react-redux';

function App(props) {
  React.useEffect(() => { props.changeCity('Москва') }, []);

  if (!props.isFirstInit) {
    return null;
  } else {
    return (
      <div className={`app ${props.theme}-theme`} >
        <Sidebar changeTheme={props.changeTheme} />
        <Main />
      </div >
    );
  }
};

const mapStateToProps = state => ({
  isFirstInit: state.weather.isFirstInit,
  theme: state.settings.theme
});

export default connect(mapStateToProps, { changeCity, changeTheme })(App);
