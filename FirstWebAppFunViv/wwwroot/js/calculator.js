$(document).ready(function () {
    $('#calculate').click(function () {
        // Clear any previous error message.
        $('#hours-error').text('');

        // Get the number of hours and hourly rate.
        var hours = $('#hours').val();
        var rate = $('#rate').val();

        // Validate input.
        if (hours <= 0 || isNaN(hours)) {
            $('#hours-error').text('Please enter a positive number for hours.');
            return;
        }

        // Calculate and display the total.
        var total = hours * rate;
        $('#total').val(total.toFixed(2));
    });
});