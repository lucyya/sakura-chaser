var cities = ["FUKUOKA", "KUMAMOTO", "HIROSHIMA", "MATSUYAMA", "TOKYO", "NAGOYA", "YOKOHAMA", "KANAZAWA", "FUJI FIVE LAKES", "FUKUSHIMA", "SENDAI", "HAKODATE", "SAPPORO", "KYOTO", "OSAKA", "NARA"];

var pointer = -1;

$(document).ready(function () {
    
    // a full function of auto-suggest enabling arrowkey select with select effect and mouse select with hover effect 
    $("#search").keyup(function (event) {
        if ((event.keyCode == 38 || event.keyCode == 40) && $(".city").length > 0) {
            $($(".city")[pointer]).css("background-color", "transparent");
            pointer -= (pointer > 0 && event.keyCode == 38) ? 1 : 0;
            pointer += (pointer < $(".city").length - 1 && event.keyCode == 40) ? 1 : 0;
            $($(".city")[pointer]).css("background-color", "rgba(255,255,255,0.1)");
            $("#search").val($($(".city")[pointer]).text());
        } else {
            var input = $("#search").val().toUpperCase();
            $("#suggest").empty();
            pointer = -1;
            for (i in cities) {
                if (cities[i].search(input) != -1 && input.length > 1) {
                    $("#suggest").append("<div class='city'>" + cities[i] + "</div>");
                    $(".city").hover(function () {
                        $(this).css("background-color", "rgba(255,255,255,0.1)");
                    }, function () {
                        $(this).css("background-color", "transparent");
                    })
                    $(".city").click(function (event) {
                        $("#search").val($(this).text());
                        $("#suggest").empty();
                    })
                }
            }
        }
    })  
});
