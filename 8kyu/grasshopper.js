// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

function combat(health, damage) {
    // Write your code here
    let total;
    total = health - damage;
    if (total < 0) {
    return total = 0;
    } else return total;
}

combat (20, 30);