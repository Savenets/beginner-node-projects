/**
 * Created by Nick on 7/25/2016.
 */

var fs = require('fs');
var obj;
fs.readFile('./movies.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    //console.log(obj);
    var rating = obj.slice(0);
    rating.sort(function(a,b) {
        return a.imdbRating - b.imdbRating;
    });
    console.log('rating _________________---------------------------:');
    //console.log(rating);

    var time = [];
    for(var i = 0; i < rating.length; i++){
        console.log(rating[i].Title);


       time.push(parseInt(rating[i].Runtime))
    }
    //Use reduce to calculate the total length to watch all the movies
    function getSum(total, num) {
        return total + num;
    }

    console.log(time);
     var res =  time.reduce(getSum);
    console.log( 'the total length of all movies is ' + res +'min*');




});
