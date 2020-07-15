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



// $('#dueDate').on("change", function(){
//     // console.log(this.value);
//    var d = new Date(this.value); 
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     console.log(d);
//     console.log(d.getMonth());
//     console.log(d.getDate());
//     console.log(d.getFullYear());
//     console.log(`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);
// });

document.querySelectorAll('.dueDate').forEach(item => {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    if (item.textContent != 'No Deadline') {
        console.log(item.textContent);
        var d = new Date(item.textContent);
        item.textContent = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
        console.log(`${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`);
    }
});