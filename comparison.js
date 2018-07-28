$(document).ready(function() {
    //console.log("Hello");
    //$('#result').append('Hello World');

    var myStorage = window.localStorage;


    var parsedArray = JSON.parse(myStorage.formArray);
    $('#name1').text(parsedArray[0].prodvalue);
    $('#desc1').text(parsedArray[0].descvalue);
    $('#price1').text(parsedArray[0].pricevalue);

    $('#name2').text(parsedArray[1].prodvalue);
    $('#desc2').text(parsedArray[1].descvalue);
    $('#price2').text(parsedArray[1].pricevalue);

    $('#name3').text(parsedArray[2].prodvalue);
    $('#desc3').text(parsedArray[2].descvalue);
    $('#price3').text(parsedArray[2].pricevalue);

    //console.log(JSON.parse(localStorage.getItem('formArray')));
    //$('#result').text(myStorage[0].prodkey.val());
    //console.log(myStorage.getItem('formArray'));
})

