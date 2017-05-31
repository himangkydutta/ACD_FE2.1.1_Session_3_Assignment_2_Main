/*
*Here we are using class which implement interface
*/
var car = (function () {
    function car() {
        this.pos = 12;
        this.name = 'Ria';
    }
    car.prototype.WithStart = function () {
        console.log("Start with :- " + this.name);
    };
    car.prototype.drive = function () {
        console.log("Please drive solwly");
    };
    car.prototype.getPosition = function () {
        return this.pos;
    };
    return car;
}());
var vehicle = new car();
vehicle.WithStart();
vehicle.drive();
console.log(vehicle.getPosition());
