class UberPriceCalculator {
    constructor(baseFare, ratePerKilometer, ratePerMinute) {
        this.baseFare = baseFare;
        this.ratePerKilometer = ratePerKilometer;
        this.ratePerMinute = ratePerMinute;
    }

    calculatePrice(distanceInKilometers, durationInMinutes) {
        const distanceCost = this.ratePerKilometer * distanceInKilometers;
        const durationCost = this.ratePerMinute * durationInMinutes;
        const totalCost = this.baseFare + distanceCost + durationCost;
        return totalCost;
    }
}

// Example usage:
const uberCalculator = new UberPriceCalculator(3, 1.5, 0.2); // Base fare: $3, Rate per km: $1.5, Rate per minute: $0.2

const distanceTraveled = 10; // 10 kilometers
const rideDuration = 20; // 20 minutes

const totalPrice = uberCalculator.calculatePrice(distanceTraveled, rideDuration);
console.log(`The total price for the Uber ride is $${totalPrice}`);


//output: The total price for the Uber ride is $22