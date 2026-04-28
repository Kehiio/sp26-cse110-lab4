let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

for(let property in statistics){
    // Print value if property name starts with 'r'
    if (property[0] == 'r')
    {
        console.log(statistics[property])
    }
    // Print value if the property value is odd
    else if (statistics[property] % 2 == 1){
        console.log(statistics[property])
    }
}
