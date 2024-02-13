const makeChange = (c) => {
    // Define the values of each coin
    const quarterValue = 0.25;
    const dimeValue = 0.10;
    const nickelValue = 0.05;
    const pennyValue = 0.01;

    // Parse the input amount to an integer
    const amount = parseInt(c);

    // Initialize counts for each coin
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    // Calculate the number of quarters
    quarters = Math.floor(amount / quarterValue);
    // Calculate the remaining amount after using quarters
    let remainingAmount = amount % quarterValue;

    // Calculate the number of dimes
    dimes = Math.floor(remainingAmount / dimeValue);
    // Calculate the remaining amount after using dimes
    remainingAmount %= dimeValue;

    // Calculate the number of nickels
    nickels = Math.floor(remainingAmount / nickelValue);
    // Calculate the remaining amount after using nickels
    remainingAmount %= nickelValue;

    // Calculate the number of pennies
    pennies = Math.floor(remainingAmount / pennyValue);

    // Construct and return the result object
    const result = {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };

    return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
