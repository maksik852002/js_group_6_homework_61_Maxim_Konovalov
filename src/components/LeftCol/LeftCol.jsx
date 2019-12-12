import React from 'react';

  const LeftCol = props => (
    <div className='col-4 mt-4'>
      <div className='p-3 border border-secondary rounded'>
        <ul style={{height: '880px', listStyle: 'none', cursor: 'pointer'}} className='overflow-auto p-0 m-0'>
          {props.children}
        </ul>
      </div>
    </div>
  );

export default LeftCol;