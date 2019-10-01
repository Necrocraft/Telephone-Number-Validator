function telephoneCheck(str) {
    // Regex to check the US phone number based on any combination of the formats.
    //The area code is required. If the country code is provided, you must confirm that the country code is 1. 
    //Return true if the string is a valid US phone number; otherwise return false
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}