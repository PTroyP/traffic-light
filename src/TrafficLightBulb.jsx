export function TrafficLightBulb({ color, currentColor }) {
  const myColor = currentColor === color ? color : 'black';

  return <div className={`circle ${myColor}`}></div>;
}
