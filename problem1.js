let car = {
    model: 'Ferrari',
    producer: 'Philly Ferrari',
    color: 'blue',
    engine: 'V-12',
    enginePower: 357,
    topSpeed: ' 320 km/h',
    model_fullName:'Ferrari 550 Maranello',
}

console.log(car.model);
console.log(car.color);

//otherwise
console.log(car.color, car.model);


delete car.engine;

car.ownerName = 'Luka';
car.totalDisplacement = 5473.91;
console.log(car);



