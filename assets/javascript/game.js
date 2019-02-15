var RandomNumber;
var win = 0;
var lost = 0;
var previous = 0;
var imageArray= ["https://pbs.twimg.com/profile_images/378800000856607865/e96CZNLU_400x400.jpeg", "http://i.dailymail.co.uk/i/pix/2016/04/15/15/333699FA00000578-3541921-image-a-89_1460729476370.jpg", "https://image.tmdb.org/t/p/original/7zMtjSgbsgBu0BXQodHXMnRTDui.jpg","https://thefangirlsdilemma.files.wordpress.com/2012/09/billy-crystal-miracle-max.jpg"]
var ResetAndStart = function () {

    $(".crystals").empty();

    RandomNumber = Math.floor(Math.random() * 101) + 19;

    $("#results").html('Random Result: ' + RandomNumber);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;

        var crystal = $("<img>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random,
            "src": imageArray[i]



        });

        crystal.html(random);


        $(".crystals").append(crystal);

    }

    $("#previous").html('previous '+ previous);
}



ResetAndStart();


$(document).on('click', ".crystal", function () {
    // console.log("GOT A CLICK");
    var num = parseInt($(this).attr("data-random"));

    previous += num;


    $("#previous").html('Previous ' + previous);

    console.log(previous, RandomNumber);

    if (previous > RandomNumber) {
        // debugger;
        console.log('you lose bud');
        lost++;

        $("#lost").html(lost);

        previous = 0;
        alert("You lose!!!")

        ResetAndStart();

    } else if (previous === RandomNumber) {

        win++;

        $("#win").html(win);

        previous = 0;
        alert("We have a winner!!")

        ResetAndStart();

    }
});