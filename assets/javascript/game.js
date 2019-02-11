var randomNumber ;
var win ;
var lost ;
var previous = 0

var randomNumber = Math.floor(Math.random() * 101) + 19;

$("#results").html('Random Result: ' + randomNumber);

for(var i=0 ; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;

    var crystals= $("<div>");
        crystals.attr({
            "class": 'crystal',
            "data-random":random
        });

        $(".crystals").append(crystals);

}

$(".crystal").on('click', function () {

    var num = parseInt($(this).attr("data-random"));

    previous += num;
    console.log(previous)

});