export function TrafficLightBulb({ color, currentColor }) {
  // const { color, currentColor } = props;
  const myColor = currentColor === color ? color : 'black';

  return <div className={`circle ${myColor}`}></div>;
}
