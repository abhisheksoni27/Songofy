SongsL = new Mongo.Collection('songs');

songsarray = [];
kb = [48,128,320];
var a = "",
    len = 0;
flag = 0;
var cheerio = Meteor.npmRequire('cheerio');



try {
    var response = request.getSync("https://www.google.co.in/search?q=mp3mad.com+yaari+chandigarh");
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
    b = foo1.next().find('a');
    songsarray[1] = b.attr('href');
    c = foo1.next().next().find('a');
    songsarray[2] = c.attr('href');

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
