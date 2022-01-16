import React, { useState, useEffect } from 'react';

const TIME_CONVERSIONS = {
  millisecondsPerSecond: 1000,
  secondsPerMinute: 60,
  minutesPerHour: 60,
  hoursPerDay: 24,
  averageNumberOfDaysPerYear: 365.2421897,
};

const MULTIPLICATIVE_IDENTITY = 1;

const multiply = (multiplier, multiplicand) => multiplier * multiplicand;

const AVERAGE_NUMBER_OF_MILLISECONDS_PER_YEAR = Object
  .values(TIME_CONVERSIONS)
  .reduce(multiply, MULTIPLICATIVE_IDENTITY);

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = AVERAGE_NUMBER_OF_MILLISECONDS_PER_YEAR;
    const birthTime = new Date('1989-03-25T18:00:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 12,
    link:
      'https://www.google.com/maps',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'New York, NY',
  },
];

export default data;
