import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/';

ReactDOM.render(<App />, document.getElementById('root'));