import React from 'react';

const CountryInfo = props => (
  <div style={{height: '880px'}} className="p-3">
    <div className='d-flex pb-5'>
      <div className='col-7'>
        <h2 className='mb-4'>{props.name}</h2>
        <p className='ml-2'><b>Capital: </b>{props.capital!=='' ? props.capital: 'none'};</p>
        <p className='ml-2'><b>Region: </b>{props.region!=='' ? props.region: 'none'};</p>
        <p className='ml-2'><b>Population: </b>{props.population};</p>
      </div>
      <div className='col-5'>
        <img className='border w-100' src={props.flag} alt="Flag"/>
      </div>
    </div>
    <hr className='pt-5'></hr>
    <div className='w-100'>
      <p className='ml-2'><b>Borders with: </b></p>
      <ul>
        {props.children}
      </ul>
    </div> 
  </div>
);

export default CountryInfo;