import React from 'react';
import CountryList from './containers/CountryList/CountryList';
import './bootstrap.min.css';

const App = () => (
  <div className='container'>
    <div className='row'>
      <CountryList/>
    </div>
  </div>
);

export default App;