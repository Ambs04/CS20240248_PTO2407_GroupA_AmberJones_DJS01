/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const param = {
  velocity: 10000, // velocity (km/h)
  acceleration: 38880, // acceleration (m/s^2)
  timeInSecs: 3600, // seconds (1 hour)
  timeInHours: 1, // 1 hour
  distance: 0, // distance (km)
  fuel: 5000, // remaining fuel (kg)
  fuelBurnRate: 0.5, // fuel burn rate (kg/s)
};

const newDistance = param.distance + param.velocity * param.timeInHours; //calculates new distance
const remainingFuel = param.fuel - param.fuelBurnRate * param.timeInSecs; //calculates remaining fuel
const newVelocity = calculateNewVelocity(); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calculateNewVelocity() {
  return param.velocity + param.acceleration * param.timeInHours;
}

function parameterInputValidation() {
  if (
    typeof param.velocity !== "number" ||
    typeof param.acceleration !== "number" ||
    typeof param.timeInSecs !== "number" ||
    typeof param.timeInHours !== "number" ||
    typeof param.distance !== "number" ||
    typeof param.fuel !== "number" ||
    typeof param.fuelBurnRate !== "number"
  ) {
    throw new Error("Parameter input invalid - needs to be a number!");
  } else {
    console.log(`Corrected New Velocity: ${newVelocity} km/h`);
    console.log(`Corrected New Distance: ${newDistance} km`);
    console.log(`Corrected Remaining Fuel: ${remainingFuel} kg`);
  }
}

parameterInputValidation();
