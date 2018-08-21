$(document).ready(function () {
    var cloneCount = 1;
    
    $('#add').click(function() {
        //create new product info form section on button click
        $('.first-product:first').clone().attr('id', 'form' + cloneCount++).appendTo('#productForm');
        //keep page from reloading on button click
        return false;
    })

    var formArray = [];
$('#submitButton').click(function (e) {
    //e.preventDefault();

/*$(":input").each(function () {
    var key = $(this).attr('name');
    var val = $(this).val();
    item = {}
    item.val= val;
    console.log(item);
    formArray.push(item);
});*/


var x = $('form').serializeArray();
console.log(x);


//puts key/value pairs into local storage so I can retrieve them on the next page
localStorage.setItem("x", JSON.stringify(x));
//go to the comparison page on button click
window.location.href="comparison.html";
//console.log(formArray);
})

});