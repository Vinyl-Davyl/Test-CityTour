/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
    // Color Changer
    document.querySelector("#style-switcher .default" ).click(function(){
        document.querySelector("#colors" ).attr("href", "#" );
        return false;
    });

    document.querySelector("#style-switcher .aqua" ).click(function(){
        document.querySelector("#colors" ).attr("href", "css/colors/color-aqua.css" );
        return false;
    });

    document.querySelector("#style-switcher .green_switcher" ).click(function(){
        document.querySelector("#colors" ).attr("href", "css/colors/color-green.css" );
        return false;
    });
    
    document.querySelector("#style-switcher .orange" ).click(function(){
        document.querySelector("#colors" ).attr("href", "css/colors/color-orange.css" );
        return false;
    });
    
    document.querySelector("#style-switcher .blue" ).click(function(){
        document.querySelector("#colors" ).attr("href", "css/colors/color-blue.css" );
        return false;
    });

    document.querySelector("#style-switcher h2 a").click(function(e){
        e.preventDefault();
        var div = document.querySelector("#style-switcher");
        console.log(div.css("left"));
        if (div.css("left") === "-205px") {
            document.querySelector("#style-switcher").animate({
                left: "0px"
            }); 
        } else {
            document.querySelector("#style-switcher").animate({
                left: "-205px"
            });
        }
    });

    document.querySelector(".colors li a").click(function(e){
        e.preventDefault();
        document.querySelector(this).parent().parent().querySelector("a").removeClass("active");
        document.querySelector(this).classList.add("active");
    });
        

});