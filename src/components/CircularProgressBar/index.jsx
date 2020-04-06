import React from 'react';
import PropTypes from 'prop-types';
import StyledProgressBar from './StyledProgressBar.styled';


const CircularProgressBar = ({voteAverage}) => {

  const radius = 17;
  const circleLength = 2*Math.PI*radius;
  const percentOfFill = circleLength - (circleLength * voteAverage) / 10;
  const userScore = voteAverage*10;

  return (
    <StyledProgressBar percentOfFill={percentOfFill} circleLength={circleLength} >
      <svg>
        <circle cx="20" cy="20" r={radius}/>
        <circle cx="20" cy="20" r={radius}/>
      </svg>
      <div>
        <h2>{userScore}<sub>%</sub></h2>
      </div>
    </StyledProgressBar>
  );
};

CircularProgressBar.propTypes = {
  voteAverage: PropTypes.number.isRequired
};

export default CircularProgressBar;
