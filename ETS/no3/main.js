// Function to filter non-numeric characters from input
function filterNonNumericInput(input) {
    // Replace any non-numeric characters with an empty string
    input.value = input.value.replace(/[^0-9]/g, '');
}

// Get the input fields
var phoneInput = document.getElementById('phone');
var countryCodeInput = document.getElementById('country_code');

// Add event listeners to restrict input to numbers only
phoneInput.addEventListener('input', function() {
    filterNonNumericInput(phoneInput);
});

countryCodeInput.addEventListener('input', function() {
    filterNonNumericInput(countryCodeInput);
});
