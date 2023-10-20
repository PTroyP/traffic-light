import { useState } from 'react';
import { TrafficLightBulb } from './TrafficLightBulb';

export const FunctionalTrafficLight = () => {
  const [lightColor, setLightColor] = useState('green');

  const transitionsOrder = { red: 'green', green: 'yellow', yellow: 'red' };

  let nextColor = transitionsOrder[lightColor];

  const nextState = () => {
    setLightColor(nextColor);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        <TrafficLightBulb color={'red'} currentColor={lightColor} />
        <TrafficLightBulb color={'yellow'} currentColor={lightColor} />
        <TrafficLightBulb color={'green'} currentColor={lightColor} />
      </div>
      <button onClick={nextState} className="next-state-button">
        Next State
      </button>
    </div>
  );
};
