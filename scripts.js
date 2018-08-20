$(document).ready(function () {
    //create empty array
    var formArray = [];
    //run the following code when the submit button is clicked
    $('#submitButton').click(function () {
        e.preventDefault();
        //create an empty object
        var formVal = {};
        //gets the keys (attr) and the values (val) from the input fields.
        //Puts them into keys and values in the formVal object so that it
        //has all the keys and values for the first product. 
        //takes the attribute assigned to the first input field and puts it in formVal as prodkey
        formVal.prodkey = $('#firstProdName').attr('name');
        //takes the value input into the first input field and puts it in formVal as prodvalue
        formVal.prodvalue = $('#firstProdName').val();
        formVal.desckey = $('#firstProdDesc').attr('name');
        formVal.descvalue = $('#firstProdDesc').val();
        formVal.pricekey = $('#firstProdPrice').attr('name');
        formVal.pricevalue = $('#firstProdPrice').val();


       




        //does the same as above for the second product
        var secondFormVal = {};
        secondFormVal.prodkey = $('#secondProdName').attr('name');
        secondFormVal.prodvalue = $('#secondProdName').val();
        secondFormVal.desckey = $('#secondProdDesc').attr('name');
        secondFormVal.descvalue = $('#secondProdDesc').val();
        secondFormVal.pricekey = $('#secondProdPrice').attr('name');
        secondFormVal.pricevalue = $('#secondProdPrice').val();

        //does the same as above for third product
        var thirdFormVal = {};
        thirdFormVal.prodkey = $('#thirdProdName').attr('name');
        thirdFormVal.prodvalue = $('#thirdProdName').val();
        thirdFormVal.desckey = $('#thirdProdDesc').attr('name');
        thirdFormVal.descvalue = $('#thirdProdDesc').val();
        thirdFormVal.pricekey = $('#thirdProdPrice').attr('name');
        thirdFormVal.pricevalue = $('#thirdProdPrice').val();

        //pushes formVal to the empty array
        formArray.push(formVal);
        console.log(formVal)
        //pushes secondFormVal to the empty array
        formArray.push(secondFormVal);
        //pushes thirdFormVal to the empty array
        formArray.push(thirdFormVal);

        //takes the array with all 3 objects and stringifies it to create a JSON string.
        //takes the JSON string and pushes it to local storage.
        localStorage.setItem("formArray", JSON.stringify(formArray));
        console.log(formArray);
    })
    //final closing tag
})