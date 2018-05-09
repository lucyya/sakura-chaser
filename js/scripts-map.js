$(document).ready(function () {

    // load json file 
    var regions = data.regions;
    for (const i in regions) {
        var col = i < 2 ? $("#left") : $("#right");
        col.append('<h3 class="text-center mt-5">' + regions[i].region + '</h3>');
        var cities = regions[i].cities;
        for (const j in cities) {
            col.append('<a class="row" href="attractions.html"' + cities[j].link + '>' + cities[j].name + '</a>');
            col.append('<p>Estimated best viewing dates: ' + cities[j].estimated + '</p>');
            col.append('<p>Blooming start: '+cities[j].start+'</p>')
        }
    }
});