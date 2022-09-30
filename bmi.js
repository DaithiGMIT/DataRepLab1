class BMI{
    //make a constructor to create an instance of the class
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }

    //make a constructor to create an instance of the class
    calculateBMI(){
        //create a variable for the calculation of BMI
        let bmi = this.weight/(this.height**2);
        //log to console
        console.log(bmi);
    }

}

//create an instantance of BMI and pass the parameters
const bm1 = new BMI(5, 100);
//call the calculation method for the bm1
bm1.calculateBMI();
