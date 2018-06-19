$(document).ready(function() {

    function search() {
        var searchString = $('#textInput').val();
        var wikiUrl = 'https://en.wikipedia.org//w/api.php' +
        '?callback=?' +
        '&action=opensearch' +
        '&format=json' +
        '&profile=fuzzy' +
        '&limit=10' +
        '&prop=imageinfo&format=json&iiprop=urll' +
        '&search=' +
        encodeURI(searchString);
        $.getJSON(wikiUrl, function(data) {
            console.log(data);
            $("#results").empty();
            $("#results").addClass("box2");
            for(let i=0;i<data[1].length; i++)
            {
                $("#results")
                    .append("<div class=\"item\"> \n <a target=\"_blank\" href=\"" 
                + data[3][i] +"\" >" + data[1][i] +" </a> \n <p class = \"urlText\" >"
                + data[3][i] +"</p> \n <p>"
                +data[2][i] +"</p> \n </div>");                  
            }
        });
    }
    $("#searchButton").on('click',function() {        
        search();   
    }); 
    
    $("#textInput").on('keypress', function (e) {
        if(e.which === 13){
           $(this).attr("disabled", "disabled");
            search();    
           $(this).removeAttr("disabled");
        }
    });
    $("#randomButton").on('click',function() {        
        console.log("ssii")
        var wikiUrlRamdom = 'https://en.wikipedia.org/wiki/Special:Random' 
        window.open(wikiUrlRamdom);
    });

});