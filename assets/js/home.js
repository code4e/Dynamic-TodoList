$('.element').focus(function (e) {
    if (e.target.tagName == 'SELECT') {
        $('option').css("background-color", "white");
    }
    $(this).css("background-color", "#E8E8E8");
    $(this).parent().css("background-color", "#E8E8E8");
});
$('.element').focusout(function () {
    $(this).css("background-color", "");
    $(this).parent().css("background-color", "");
});

$(function(){
    if (localStorage.input) {
        var checks = JSON.parse(localStorage.input);
        jQuery(':checkbox').prop('checked', function(i) {
            return checks[i];
        });
    }
});

$(':checkbox').on('change', function() {
    localStorage.input = JSON.stringify(jQuery(':checkbox').map(function() {
        return this.checked;
    }).get());
});