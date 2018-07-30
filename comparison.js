$(document).ready(function() {
    //console.log("Hello");
    //$('#result').append('Hello World');
    //gets the JSON string stored in local storage and sets it to myStorage
    var myStorage = window.localStorage;

    //takes the JSON from the storage and parses it so it will be an array an sets it to parsedArray
    var parsedArray = JSON.parse(myStorage.formArray);
    //gets the key/value pairs from the first object in the array and puts them in
    //the html as text
    $('#name1').text(parsedArray[0].prodvalue);
    $('#desc1').text(parsedArray[0].descvalue);
    $('#price1').text(parsedArray[0].pricevalue);

    //gets the key/value pairs from the second object in the array and puts them in
    //the html as text
    $('#name2').text(parsedArray[1].prodvalue);
    $('#desc2').text(parsedArray[1].descvalue);
    $('#price2').text(parsedArray[1].pricevalue);

    //gets the key/value pairs from the third object in the array and puts them in
    //the html as text
    $('#name3').text(parsedArray[2].prodvalue);
    $('#desc3').text(parsedArray[2].descvalue);
    $('#price3').text(parsedArray[2].pricevalue);

    //console.log(JSON.parse(localStorage.getItem('formArray')));
    //$('#result').text(myStorage[0].prodkey.val());
    //console.log(myStorage.getItem('formArray'));
})

