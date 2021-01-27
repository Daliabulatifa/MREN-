class ninja {
    constructor (name, helth=0, speed=3, strengh=3){
    this.name=name;
    this.helth=helth;
    this.speed=speed;
    this.strengh=strengh;
    }
    sayName(){
        console.log("the name is "+ this.name);
    }
    showState(){
        console.log("the name is "+this.name , "the strengh is "+ this.strengh, "the speed is "+ this.speed);
    } 
    drinkSake(){
        this.helth+=10;
        console.log (this.helth);

    }
}

class Sensei extends ninja {
    constructor (name, wisdom=10){
    super(name,200, 10,10 );
    this.wisdom=wisdom;
    }
    speakWisdom (){
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    // showStats(){
    //     console.log();
    // }
}

// var ninja1= new ninja("dalia");
// ninja1.sayName();
// ninja1.showState();
// ninja1.drinkSake();
var Sensei1= new Sensei("Daliaaaa")
Sensei1.speakWisdom();
