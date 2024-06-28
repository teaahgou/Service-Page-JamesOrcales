$(document).ready(function() {
    // Flip between Selling Process and Buying Process
    $('#flip-icon').click(function() {
        $('#selling-process, #buying-process').toggleClass('hidden');
    });
});
