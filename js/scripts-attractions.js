var main = ["TOKYO", "KYOTO", "OSAKA", "FUJI FIVE LAKES","NARA", "HIROSHIMA"];
var cities = data.recommend;
var index = $(location).attr("href").search("search=");
var link = $(location).attr("href").substr(index + 7).replace(/\+/g, " ");
index = main.indexOf(link);

function initMap() {

    // initialize google map and geocoder
    var geocoder = new google.maps.Geocoder();
    var japan = { lat: 36.204824, lng: 138.252924 };
    var zoom = index != -1 ? 12 : 6;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: zoom,
        center: japan
    });

    // set the center of the map if city is known
    if (index != -1) {
        var sites = cities[index].sites;
        geocoder.geocode({ 'address': main[index] + ",japan" }, function (results, status) {
            map.setCenter(results[0].geometry.location);
        });
    }
    
    // get the geolocations of cities/sites and mark on the map
    if (index != -1) {
        var sites = cities[index].sites;
        for (const j in sites) {
            geocoder.geocode({ 'address': sites[j].address }, function (results, status) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            });
        }
    } else {
        for (const i in main) {
            geocoder.geocode({ 'address': main[i]+",japan" }, function (results, status) {
                var marker = new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location
                });
            });
        }
    }



}

$(document).ready(function () {
    var number = 0;

    if (index != -1) {
        var sites = cities[index].sites;
        var city = cities[index].city;
        $(".landing h1").text(link.toUpperCase());
        $(".sites h1").text("Major Tourist Sities");
        $("#siteLink").empty();
        number = load(city, sites, number);
    } else {
        for (const i in cities) {
            var sites = cities[i].sites;
            var city = cities[i].city;
            number = load(city, sites, number);
        }    
    }


})

// function: loading site information into html
function load(city, sites, number) {
    for (const j in sites) {
        $("#recommend").append('<div class="site ' + city + ' clearfix ' + (number % 2 == 0 ? "odd" : "even") + ' container-fluid" id= "' + (j == 0 ? city : "") + ' ' + sites[j].site.replace(/ /g, "") + '">');
        $("." + city).last().append('<h2>' + sites[j].site + '</h2>');
        $("." + city).last().append('<p>' + sites[j].description + '</p>');
        $("." + city).last().append('<table><tbody>        </tbody></table>');
        if (index != -1) {
            $("#siteLink").append('<div class="row my-3">' + sites[j].site + '</div>');
        }    
        if (sites[j].open) {
            $("." + city + " tbody").last().append('<tr><td>Business Hours</td></tr>');
            $("." + city + " tr").last().append('<td>' + sites[j].open + '</td>');
        }
        if (sites[j].price) {
            $("." + city + " tbody").last().append('<tr><td>Price</td></tr>');
            $("." + city + " tr").last().append('<td>' + sites[j].price + '</td>');
        }
        if (sites[j].address) {
            $("." + city + " tbody").last().append('<tr><td>Address</td></tr>');
            $("." + city + " tr").last().append('<td>' + sites[j].address + '</td>');
        }
        if (sites[j].telephone) {
            $("." + city + " tbody").last().append('<tr><td>Telephone</td></tr>');
            $("." + city + " tr").last().append('<td>' + sites[j].telephone + '</td>');
        }
        if (sites[j].website) {
            $("." + city + " tbody").last().append('<tr><td>Website</td></tr>');
            $("." + city + " tr").last().append('<td>' + sites[j].website + '</td>');
        }
        number++;
    }
    return number;
}