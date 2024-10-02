function showPerson(fname, lname, age){
    // Create an object:
    var person = {
        firstName: fname = "Liam",
        lastName: lname = "Mayberry",
        age: age = 27,
    };
    
    // Display some data from the object:
    document.getElementById("result").innerHTML =
    person.firstName + " is " + person.age + " years old.";
}
