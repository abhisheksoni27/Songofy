SongsList = new Mongo.Collection('songs');
SearchTerm = new Mongo.Collection('search');
songsarray = [];
kb = [48, 128, 320];
var a = "",
    len = 0;
flag = 0;
var cheerio = Meteor.npmRequire('cheerio');

Meteor.methods({
    searchsong: function() {

        var a1 = String(SearchTerm.findOne().sub);
        console.log(a1);
        var a2 = a1.split(' ').join('+');
        console.log(a2);

        subterm = a2;
        SearchTerm.remove({});
        console.log(subterm + "okayokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai byeokay bhai bye bhai bye")

        SongsList.remove({});

        try {
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
            if (songsarray[0] != null && songsarray[0] != undefined && 1==0) {
                b = foo1.next().find('a');
                songsarray[1] = b.attr('href');
                c = foo1.next().next().find('a');
                songsarray[2] = c.attr('href');
            } else if (1==0) {

                foo = $('.fl a');
                foo1 = $('.fl');
                console.log(foo.attr('href') + "okay bhaiokay bhaiokay bhaiokay bhaiokay bhaiokay bhaiokay bhai");
                songsarray[0] = foo.attr('href');
                b = foo1.next().find('a');
                songsarray[1] = b.attr('href');


            } else {
                var response = request.getSync("https://www.google.co.in/search?q=mp3mad.com+" + subterm);

                $1 = cheerio.load(response.body);
                var a = $1('.r a');
                href = a.attr('href');
                console.log(href);
                href1 = "https://google.co.in" + href;

                var response = request.getSync(href1);

                $2 = cheerio.load(response.body);
                a = $2('.fileName');
                href2 = a.attr('href');
                console.log(href2);
                var response = request.getSync(href2);



                $ = cheerio.load(response.body);
                
                foo = $('.fl a');
                foo1 = $('.fl');
                console.log(foo.attr('href') + "okay bhaiokay bhaiokay bhaiokay bhaiokay bhaiokay bhaiokay bhai");
                songsarray[0] = foo.attr('href');
                b = foo1.next().find('a');
                songsarray[1] = b.attr('href');


            }




            console.log(songsarray);

            flag = 1;
            if (flag == 1) {
                for (i = 0; i < songsarray.length; i++) {
                    SongsList.insert({
                        linksong: songsarray[i],
                        kbps: kb[i]

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
