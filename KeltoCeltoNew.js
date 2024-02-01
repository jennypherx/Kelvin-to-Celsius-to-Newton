// Kelvin to Celsius Weather - Celsius to Newton

//Create a constant variable named kelvin, and set it equal to 293.
const kelvin = 293;

//Convert Kelvin to Celsius by subtracting 273 from the kelvin. 
//Celsius is 273 degrees less than Kelvin.
const celsius = kelvin - 273;

//Round the number saved to fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');

//Celsius to Newton
let newton = celsius * (33/100);

//Round down the Newton temperature using the .floor() method
newton = Math.floor(newton);

console.log('The temperature is ' + newton + ' degrees Newton.');