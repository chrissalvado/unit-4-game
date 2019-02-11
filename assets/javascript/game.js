var randomNumber ;
var win ;
var lost ;

var randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber)

$("#results").html('Random Result: ');

for(var i=0 ; i < 4; i++){

    var random = Math.floor(Math.random() * 12);

    var crystals= $("<div>");
        crystals.attr({
            "class": 'crystal',
            "data-random":random
        });

        $(".crystals").append(crystals);



}

