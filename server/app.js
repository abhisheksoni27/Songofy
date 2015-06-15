SongsList = new Mongo.Collection('songs');
SongsList.remove();
key = "songsearcher";
SearchTerm = new Mongo.Collection('search');
songsarray = [];
kb = [48, 128, 320];
var a = "",
    len = 0;
flag = 0;
var cheerio = Meteor.npmRequire('cheerio');

Meteor.methods({
    searchsong: function(usid) {

        var usersecret = usid;
        var a1 = String(SearchTerm.findOne().sub);
        console.log(a1);
        var a2 = a1.split(' ').join('+');
        console.log(a2);

        subterm = a2;
        SearchTerm.remove({});
        console.log(subterm)

        SongsList.remove({});

        try {
            SongsList.remove({});
            console.log("Success");
            var response = request.getSync("https://www.google.co.in/search?q=mp3mad.com+" + subterm);

            $1 = cheerio.load(response.body);
            var a = $1('.r a');
            href = a.attr('href');
            console.log(href);
            href1 = "https://google.co.in" + href;

            var response = request.getSync(href1);

            $ = cheerio.load(response.body);
            foo1 = $('ol li');
            foo = $('ol li a');


            songsarray[0] = foo.attr('href');
            if (songsarray[0] != null && songsarray[0] != undefined) {
                b = foo1.next().find('a');
                songsarray[1] = b.attr('href');
                c = foo1.next().next().find('a');
                songsarray[2] = c.attr('href');
            } else {

                foo = $('.fl a');
                foo1 = $('.fl');
                console.log(foo.attr('href'));
                songsarray[0] = foo.attr('href');
                b = foo1.next().find('a');
                songsarray[1] = b.attr('href');
                songsarray[2] = "";



            }

            console.log(songsarray);

            flag = 1;
            if (flag == 1) {
                for (i = 0; i < songsarray.length && songsarray[i] != "" && songsarray[i] != undefined; i++) {
                    SongsList.insert({
                        linksong: songsarray[i],
                        kbps: kb[i],
                        userid: usersecret

                    });
                    console.log(SongsList.find().fetch());
                }

            }


        } catch (exception) {
            console.log(exception);
        }


    }
});


// At the bottom of simple-todos.js
if (Meteor.isServer) {
    Meteor.publish("search", function() {
        return SearchTerm.find();
    });
}

if (Meteor.isServer) {
    Meteor.publish("songs", function() {
        return SongsList.find();
    });
}

SearchTerm.allow({
    'insert': function(sub) {
        /* user and doc checks ,
        return true to allow insert */
        return true;
    }
});

SongsList.allow({
    'remove': function(subj) {
        /* user and doc checks ,
        return true to allow insert */
        return true;
    }

});
