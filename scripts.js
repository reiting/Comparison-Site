$(document).ready(function() {
    //create empty array
    var formArray = [];
    if ($('body').hasClass('one')) {
    $('#submitButton').click(function() {
        var formVal = {};
        formVal.prodkey = $('#firstProdName').attr('name');
        formVal.prodvalue = $('#firstProdName').val();
        formVal.desckey = $('#firstProdDesc').attr('name');
        formVal.descvalue = $('#firstProdDesc').val();
        formVal.pricekey = $('#firstProdPrice').attr('name');
        formVal.pricevalue = $('#firstProdPrice').val();

        var secondFormVal = {};
        secondFormVal.prodkey = $('#secondProdName').attr('name');
        secondFormVal.prodvalue = $('#secondProdName').val();
        secondFormVal.desckey = $('#secondProdDesc').attr('name');
        secondFormVal.descvalue = $('#secondProdDesc').val();
        secondFormVal.pricekey = $('#secondProdPrice').attr('name');
        secondFormVal.pricevalue = $('#secondProdPrice').val();

        var thirdFormVal = {};
        thirdFormVal.prodkey = $('#thirdProdName').attr('name');
        thirdFormVal.prodvalue = $('#thirdProdName').val();
        thirdFormVal.desckey = $('#thirdProdDesc').attr('name');
        thirdFormVal.descvalue = $('#thirdProdDesc').val();
        thirdFormVal.pricekey = $('#thirdProdPrice').attr('name');
        thirdFormVal.pricevalue = $('#thirdProdPrice').val();

        formArray.push(formVal);
        formArray.push(secondFormVal);
        formArray.push(thirdFormVal);

        localStorage.setItem("formArray", JSON.stringify(formArray));
        
        
    //click
    })
} else if ($('body').hasClass('two')) {
    var myStorage = window.localStorage;
    //$('#result').text(myStorage[0].prodkey.val());
    //console.log(myStorage.getItem('formArray'));

}
    //final
})