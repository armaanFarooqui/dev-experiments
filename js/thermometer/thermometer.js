// Today's temperature in the Kelvin scale.
const kelvin = 270.15;

// Converting the Kelvin value to the Celsius scale.
const celsius = Math.floor(kelvin - 273.15);

// Converting the Celsius value to the Newton scale.
const newton = Math.floor(
  celsius * (33/100)
);

// Converting the Celsius value to the Farhenheit scale.
const fahrenheit = // Rounding with Math.floor()
Math.floor(
  celsius * (9/5) + 32
  );

  console.log(`The temperature is ${celsius} degrees Celsius, 
    or ${fahrenheit} degrees Fahrenheit,
    or ${kelvin} on the Kelvin scale,
    or ${newton} on the Newton scale.`);