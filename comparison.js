$(document).ready(function() {

    //gets the JSON string stored in local storage and sets it to myStorage
    var myStorage = window.localStorage;
    //takes the JSON from the storage and parses it so it will be an object and sets it to parsedArray
    var parsedArray = JSON.parse(myStorage.formArray);
    //console.log(parsedArray);
    //iterates through the array of objects and has a function with a counter (iterator) and the object
    $('#table-container').append('<table />');
    
    $('<tr>').addClass('header-row').append(
        $('<th>').text('Name'),
        $('<th>').text('Description'),
        $('<th>').text('Price')
    ).appendTo('#table-container table');

        $.each(parsedArray, function(i, val) {
           $('<tr>').append(
                $('<td>').text(val.name),
                $('<td>').text(val.description),
                $('<td>').text(val.price).addClass('price')
            ).appendTo('#table-container table');
        })

      //on button click
      $('button').click(function(){
          //set var min to be the lowest price value
        var min = Math.min.apply(null, parsedArray.map(function(a){return a.pricevalue;}));
        //iterate over the class of price
          $('.price').each(function() {
              //if the textContent (the number) is equal to min
            if(this.textContent == min) {
                //give it the class of better-price
                $(this).addClass('better-price');
            }
          })
      })
})
