$(document).ready(function () {
    var cloneCount = 1;
    
    $('#add').click(function() {
        //create new product info form section on button click
        $('.product-info:first').clone().attr('id', 'form' + cloneCount++).appendTo('#productForm');
        //keep page from reloading on button click
        return false;
    });

    
$('#submitButton').click(function () {
    var formArray = [];
$('.product-info').each(function () {
    var item={};
    $(this).find("input").each(function() {
        var key = this.name;
        var val = this.value;
        item[key] = val;
    });
    formArray.push(item);
});

//puts key/value pairs into local storage so I can retrieve them on the next page
localStorage.setItem("formArray", JSON.stringify(formArray));
console.log(formArray);
//go to the comparison page on button click
window.location.href="comparison.html";
})

});