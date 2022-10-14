alert ('Температура: ' + prompt ('Какая температура?'));
var itsRaining = confirm ('Идет дождь?')
var temperature = 20;
var minutes=20;

var itsRaining = true;  

if (itsRaining || temperature >= 35 || temperature <= 0) {minutes=0}

else if (temperature<=20) {minutes=temperature}

else (minutes=minutes*2-temperature)

console.log('Минут на прогулку '+minutes);


