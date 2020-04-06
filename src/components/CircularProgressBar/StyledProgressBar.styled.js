import styled, {keyframes} from 'styled-components';

const fillOff = (fill) => keyframes`
to {
stroke-dashoffset: ${fill};
}
`;

const StyledProgressBar = styled.div`

  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: inset 0 0 12px #000;
  background: #222;
  z-index: 100;
  color: var(--white);
  
  sub{
  font-size: 50%;
  }

 div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

svg {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
}

svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #191919;
  stroke-width: 3;
  stroke-linecap: round;
}

svg circle:nth-child(2) {
  stroke: #00ff43;
  stroke-dasharray: ${props => props.circleLength};
  stroke-dashoffset: ${props => props.circleLength};
  animation: ${props => fillOff(props.percentOfFill)} 2s ease-in-out forwards;
}
`;

export default StyledProgressBar;
