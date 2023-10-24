import { useState } from 'react';
import { TrafficLightBulb } from './TrafficLightBulb';
import { colorOptions, transitionsOrder } from './lightData';

export const FunctionalTrafficLight = () => {
  const [lightColor, setLightColor] = useState('green');

  const nextColor = transitionsOrder[lightColor];

  const nextState = () => {
    setLightColor(nextColor);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {colorOptions.map((lightBulb) => {
          return (
            <TrafficLightBulb
              key={lightBulb}
              color={lightBulb}
              currentColor={lightColor}
            />
          );
        })}
      </div>
      <button onClick={nextState} className="next-state-button">
        Next State
      </button>
    </div>
  );
};
