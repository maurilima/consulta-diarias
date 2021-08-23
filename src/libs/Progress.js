import React from 'react';
import reactDom from 'react-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

export function ProgressCircle() {
    reactDom.render(
        <ProgressIndicador  />, document.getElementById('progress')
    );

function ProgressIndicador() {

    return (
    <div className='progressIndicator'>
      <CircularProgress color="primary" />
    </div>
  );
}
}