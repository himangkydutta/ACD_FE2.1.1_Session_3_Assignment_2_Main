/*
 * Here we are using class which implement interface
 */

interface Derivable{
    pos:number;
    name:string;
    WithStart();
    drive();
    getPosition:()=>number;
}
class car implements Derivable{
    pos:number=12;
    name:string='Ria';
    WithStart(){
        console.log(`Start with :- ${this.name}`);
    }
    drive(){
        console.log("Please drive solwly");
    }
    getPosition(){
        return this.pos;
    }
}
var vehicle:car = new car();
vehicle.WithStart();
vehicle.drive();
console.log(vehicle.getPosition());
