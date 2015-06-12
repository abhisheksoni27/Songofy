SongsList = new Mongo.Collection('songs');
clicked = [];
var delay = 1000; //1 seconds


Template.body.helpers({

    songs: function() {
        return SongsList.find();
        console.log(SongsList.find());
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (clicked !== null) {
        clicked[0] = document.getElementById("48");
        clicked[1] = document.getElementById("128");
        clicked[2] = document.getElementById("320");
        console.log(clicked);

        if (clicked[0]) {
            clicked[0].addEventListener('click', function() {
                setTimeout(function() {
                    //your code to be executed after 1 seconds
                    clicked[0].disabled = "disabled";
                }, delay);

            }, false);
        }
        if (clicked[1]) {
            clicked[1].addEventListener('click', function() {
                setTimeout(function() {
                    //your code to be executed after 1 seconds
                    clicked[1].disabled = "disabled";
                }, delay);

            }, false);
        }
        if (clicked[2]) {
            clicked[2].addEventListener('click', function() {
                setTimeout(function() {
                    //your code to be executed after 1 seconds
                    clicked[2].disabled = "disabled";
                }, delay);

            }, false);
        }
    }

});
