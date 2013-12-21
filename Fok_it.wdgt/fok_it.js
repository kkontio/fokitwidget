/*
    Fok_it widget - Fetches Fok_it comic strip
    from <http://nyt.fi/>
    
    --Mursu 

    Fok_it widget is distributed in the hope that it will
    be useful, but WITHOUT ANY WARRANTY; without even the implied
    warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

*/

widget.onshow = onshow;
var base_url = "http://nyt.fi/aihe/fokit/";

function onshow() {
	$.get(base_url, null, parse_data);
}

function parse_data(data) {
    var current_img_url = $(data).find(".image:first > img")[0].src;
    $("#fok_it").attr("src", current_img_url);
}

