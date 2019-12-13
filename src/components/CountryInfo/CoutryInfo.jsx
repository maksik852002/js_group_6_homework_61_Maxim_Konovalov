import React from 'react';

const CountryInfo = props => (
  <div className="p-3">
    <div style={{height:'200px'}} className='d-flex pb-1'>
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
    <hr className='pt-1'></hr>
    <div style={{height:'240px'}} className='w-100 overflow-auto'>
      <p className='ml-2'><b>Borders with: </b></p>
      <ul className=''>
        {props.children}
      </ul>
    </div> 
    <hr className='pb-1'></hr>
  </div>
);

export default CountryInfo;