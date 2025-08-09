// ref: https://andrewlock.net/simple-obfuscation-of-email-addresses-using-javascript/

function encodeEmail(email, key) {
    // Hex encode the key
    var encodedKey = key.toString(16);

    // ensure it is two digits long
    var encodedString = make2DigitsLong(encodedKey);

    // loop through every character in the email
    for(var n=0; n < email.length; n++) {

        // Get the code (in decimal) for the nth character
        var charCode = email.charCodeAt(n);
        
        // XOR the character with the key
        var encoded = charCode ^ key;

        // Hex encode the result, and append to the output string
        var value = encoded.toString(16);
        encodedString += make2DigitsLong(value);
    }
    return encodedString;
}

function make2DigitsLong(value){
    return value.length === 1 
        ? '0' + value
        : value;
}

function decodeEmail(encodedString) {
    // Holds the final output
    var email = ""; 
    
    // Extract the first 2 letters
    var keyInHex = encodedString.substr(0, 2);

    // Convert the hex-encoded key into decimal
    var key = parseInt(keyInHex, 16);

    // Loop through the remaining encoded characters in steps of 2
    for (var n = 2; n < encodedString.length; n += 2) {
        
        // Get the next pair of characters
        var charInHex = encodedString.substr(n, 2)
        
        // Convert hex to decimal
        var char = parseInt(charInHex, 16);

        // XOR the character with the key to get the original character
        var output = char ^ key;

        // Append the decoded character to the output
        email += String.fromCharCode(output);
    }
    return email;
}