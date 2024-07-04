function countAllPaarl(reg_numbers) {
    // Split the input string by commas
    const reg_list = reg_numbers.split(', ');

    // Initialize a counter for Paarl registration numbers
    let count = 0;

    // Iterate through the list of registration numbers
    for (const reg of reg_list) {
        // Check if the registration number starts with 'CJ'
        if (reg.startsWith('CJ')) {
            count++; // Increment the counter for each Paarl registration number
        }
    }

    // Return the total count of Paarl registration numbers
    return count;
}