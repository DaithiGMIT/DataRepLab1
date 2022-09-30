//create class
class Vehicle {
    //make a constructor to create an instance of the class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //create a method to log the class info to the console
    Information() {
        // Using `` allows for javascript to be written within the ${}
        //display vehicle info
        console.log(`\nMake: ${this.make}\nModel: ${this.model}\nYear: ${this.year}`);
    }
}

//create child class of Vehicle
class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        //call vehicles constructor by tagging super
        super(make, model, year);
        //add doors number
        this.doors = doors;
    }

    Information() {
        //call method from Parent Class by tagging super
        super.Information();
        //also display doors
        console.log(`Doors: ${this.doors}`);
    }
}

//create an instance of the Vehicle Class
const test1 = new Vehicle("Ford", "Focus", 1995);
//Call the Information method for the test1
test1.Information();

//create an instance of the Cars Class
const test2 = new Cars("Reno", "Capture", 2008, 5);
//Call the Information method for the test2
test2.Information();

