import { Component } from 'react';
import { TrafficLightBulb } from './TrafficLightBulb';
import { colorOptions, transitionsOrder } from './lightData';

export class ClassTrafficLight extends Component {
  state = { lightColor: 'green' };

  nextState = () => {
    this.setState({ lightColor: transitionsOrder[this.state.lightColor] });
  };

  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {colorOptions.map((lightBulb) => {
            return (
              <TrafficLightBulb
                key={lightBulb}
                color={lightBulb}
                currentColor={this.state.lightColor}
              />
            );
          })}
        </div>
        <button onClick={this.nextState} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
