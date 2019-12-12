import React from 'react';

  const RightCol = props => (
    <div className='col-8 mt-4'>
      <div className='p-3 border border-secondary rounded'>
        {props.children}
      </div>
    </div>
  );

export default RightCol;