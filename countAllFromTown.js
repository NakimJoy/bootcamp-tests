function allFromTown(reg_numbers, town) {
    // Split the comma-separated registration numbers
    const reg_numbers_list = reg_numbers.split(',');

    // Initialize an empty list to store registration numbers from the specified town
    const result = [];

    // Iterate over each registration number
    for (const reg_number of reg_numbers_list) {
        // Check if the registration number starts with the specified town
        if (reg_number.trim().startsWith(town)) {
            result.push(reg_number.trim());
        }
    }

    // Return the list of registration numbers from the specified town
    return result;
}
