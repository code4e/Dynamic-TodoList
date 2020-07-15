// setting some focus styles on the input fields
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



// Retain the checkbox state after refesh by saving them in local Storage
$(function () {
    if (localStorage.input) {
        var checks = JSON.parse(localStorage.input);
        jQuery(':checkbox').prop('checked', function (i) {
            return checks[i];
        });
    }
});

$(':checkbox').on('change', function () {
    localStorage.input = JSON.stringify(jQuery(':checkbox').map(function () {
        return this.checked;
    }).get());
});





// displaying the date with the required format 
document.querySelectorAll('.dueDate').forEach(item => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (item.textContent != 'No Deadline') {
        console.log(item.textContent);
        var d = new Date(item.textContent);
        item.textContent = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        console.log(`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);
    }
});