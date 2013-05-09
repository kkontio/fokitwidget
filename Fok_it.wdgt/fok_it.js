/*
    Fok_it widget - Fetches Fok_it comic strip
    from <http://nyt.fi/>
    
    --Mursu 

    Fok_it widget is distributed in the hope that it will
    be useful, but WITHOUT ANY WARRANTY; without even the implied
    warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

*/

widget.onshow = onshow;
var base_url = "http://nyt.fi/category/sarjakuvat/";

function onshow() {
    load_comic(base_url);
}

function load_comic(strip_url) {
    $.get(strip_url, null, parse_data);
}

function parse_data(data) {
    var style_string = $(data).find(".fok-it-image:first").attr("style");
    var re = /background:url\(([^\(\)]*)\)/;
    var current_img_url = style_string.match(re)[1];
    $("#fok_it").attr("src", current_img_url);
}

