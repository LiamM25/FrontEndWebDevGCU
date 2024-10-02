console.log("Objects exercise using f1 examples.");

const team = {
    teamname: "Mercedes",
    base: "Brackley",
    principle: "Toto Wolff",
};

team.drivers = [

{
    name: "Lewis Hamilton",
    dob: new Date(1985,1,7),
},

{
 name: "George Russel",
    dob: new Date(1998,2,15),
}

];

console.log(JSON.stringify(team,null,4));

team.drivers[0].points = [25, 18, 0, 25];
team.drivers[1].points = [12,10,25,8];

team.totalPoints = function () {
    let points = 0;
    for (let d in this.drivers) {
        for (let p in this.drivers[d].points) {
            points += this.drivers[d].points[p]; ;
        }
    }
    return points;
};

console.log("Total Points: " + team.totalPoints());

team.drivers[0].points.push(25);
console.log("25 added to drivers points array" + team.drivers[0].points)

team.drivers[1].points.push(10);
console.log("10 added to drivers points array" + team.drivers[1].points)

console.log("new total points " + team.totalPoints());

//could extract the values of individual properties of team to local variables using dot notation:

let{teamname,base} = team;
console.log(teamname, base);

let{drivers:[,george]} = team;
console.log(george);

let {points:[disqualified,...counted]} = george
let countedpoints = counted.reduce((a, b) => a + b, 0)

console.log(countedpoints);

console.log("ARRAYS")
