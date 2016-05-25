import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import style from './style.css';

const App = ({ message }) => (
  <div>
    <div className={style.appTitle}>App</div>
    <div className={style.appMessage}>{message}</div>
  </div>
);

App.propTypes = {
  message: PropTypes.string,
};

const mapStateToProps = (state) => ({
  message: state.app.get('message'),
});

export { App };
export default connect(mapStateToProps)(App);

