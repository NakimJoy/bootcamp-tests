function allPaarl(param) {
    // Split the input string by comma and space
    var listToSplit = param.split(", ");

    // Initialize an empty list to store results
    const arrayForPushTo = [];

    // Iterate over each element in the list
    for (var i = 0; i < listToSplit.length; i++) {
        var result = listToSplit[i];

        // Check if the element starts with 'CJ'
        if (result.startsWith('CJ')) {
            arrayForPushTo.push(result);
        }
    }

    // Return the filtered list
    return arrayForPushTo;
}
