var temperature = 20;
var itsRaining = false;
var minutes;

if(itsRaining===true || temperature<0 || temperature>35) {
  console.log ("minutes=0");
}
else if(temperature===20) {console.log ("minutes = 20");
}
else if(temperature<20||temperature>20){console.log ("minutes=20-Math.abs(temperature-20)");
}

console.log = (minutes);
