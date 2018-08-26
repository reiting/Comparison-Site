$(document).ready(function() {

    //gets the JSON string stored in local storage and sets it to myStorage
    var myStorage = window.localStorage;
    //console.log(myStorage);
    //takes the JSON from the storage and parses it so it will be an object and sets it to parsedArray
    var parsedArray = JSON.parse(myStorage.formArray);
    console.log(parsedArray);
    //iterates through the array of objects and has a function with a counter (iterator) and the object
    $.each( parsedArray, function( i, val ) {
        
        //set the text of the id of name + 1 (because the array is 0 indexed) to be the value of prodvalue
        $('#name' + (i+1) ).append( val.name);
        //set the text of the id of desc + 1 (because the array is 0 indexed) to be the value of descvalue
        $( '#desc' + (i+1) ).text( val.description );
        //set the text of the id of price + 1 (because the array is 0 indexed) to be the value of pricevalue
        $( '#price' + (i+1) ).text( val.price );
      });  
      
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
