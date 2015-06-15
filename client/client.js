SongsList = new Mongo.Collection('songs');
SearchTerm = new Mongo.Collection('search');
clientid = Random.id();

console.log(this.userId);
clicked = [];
var delay = 1000; //1 seconds
Meteor.subscribe("search");
Meteor.subscribe("songs");
Template.download.events({
    'click button': function() {
        




        var inputterm = document.getElementById("songname").value;
        if (inputterm !== null) {
            SearchTerm.insert({
                sub: inputterm



            });


        }
        Meteor.call('searchsong', clientid);
    }
});

Template.body.helpers({

    songs: function() {
        
        return SongsList.find({userid:clientid});
        console.log(SongsList.find({userid:clientid})+"okaybhaiSongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})SongsList.find({userid:clientid})");
    }
});


document.addEventListener('click', function() {
    if (clicked !== null) {
        clicked[0] = document.getElementById("48");
        clicked[1] = document.getElementById("128");
        clicked[2] = document.getElementById("320");


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


}, false);
