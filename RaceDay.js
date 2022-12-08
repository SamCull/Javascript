let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnersAge = 22;

if(runnersAge > 18 && registeredEarly === true ){
    racenumber = Math.floor(Math.random() + 1000);
}

if (runnersAge > 18 && registeredEarly) {
    console.log(`Hello runner ${raceNumber}, your race will start at 9:30am`);
}
else if (registeredEarly == false){
    console.log(`Hello runner ${raceNumber}, your race will start at 11:00am `);
}
else if (runnersAge < 18) {
    console.log(`Hello runner ${raceNumber}, your race will start at 12:30pm`);
}
else {
    console.log('Runners aged 18, please go see the registration desk');
}