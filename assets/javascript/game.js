var RandomNumber;
var win = 0;
var lost = 0;
var previous = 0;

var ResetAndStart = function () {

    $(".crystals").empty();

    RandomNumber = Math.floor(Math.random() * 101) + 19;

    $("#results").html('Random Result: ' + RandomNumber);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random



        });

        crystal.html(random);


        $(".crystals").append(crystal);

    }

    $("#previous").html(previous);
}



ResetAndStart();


$(document).on('click', ".crystal", function () {
    // console.log("GOT A CLICK");
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html(previous);

    console.log(previous, RandomNumber);

    if (previous > RandomNumber) {
        // debugger;
        console.log('you lose bud');
        lost--;

        $("#lost").html(lost);

        previous = 0;

        ResetAndStart();

    } else if (previous === RandomNumber) {

        win++;

        $("#win").html(win);

        previous = 0;

        ResetAndStart();

    }
});