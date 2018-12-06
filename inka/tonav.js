$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$(".myartotop").addClass('mynabinf'):$(".myartotop").removeClass('mynabinf')}),$(".myartotop").click(function(){return $("html,body").animate({scrollTop:0},600),!1})});
var newidth=100;var neweight=72;$(".popular-posts .item-thumbnail img,ul.recent_posts_myar img").each(function(){var t=$(this).attr("width");$(this).attr("width",newidth),$(this).attr("height",neweight),$(this).attr("src",$(this).attr("src").replace("/s72-c/","/w"+newidth+"-h"+neweight+"-c/"))}),$(".PopularPosts .item-snippet").text(function(t,i){return i.substr(0,72) + "..."});
$(function() {
  $('a[href="#searchfs"]')["on"]("click", function(result) {
    result["preventDefault"]();
    $("#searchfs")["addClass"]("open");
    $('#searchfs > form > input[type="search"]')["focus"]();
  });
  $("#searchfs, #searchfs button.close")["on"]("click keyup", function(rules) {
    if (!(rules["target"] != this && "close" != rules["target"]["className"] && 27 != rules["keyCode"])) {
      $(this)["removeClass"]("open");
    }
  });
});
!function($) {
  $["fn"]["menumaker"] = function(o) {
    var $wrapper = $(this);
    var aggregatedDataByFormat = $["extend"]({
      format : "dropdown",
      sticky : false
    }, o);
    return this["each"](function() {
      $(this)["find"](".button")["on"]("click", function() {
        $(this)["toggleClass"]("menu-opened");
        var p = $(this)["next"]("ul");
        if (p["hasClass"]("open")) {
          p["slideToggle"](150)["removeClass"]("open");
        } else {
          p["slideToggle"](150)["addClass"]("open");
          if ("dropdown" === aggregatedDataByFormat["format"]) {
            p["find"]("ul")["show"]();
          }
        }
      });
      $wrapper["find"]("li ul")["parent"]()["addClass"]("has-sub");
      multiTg = function() {
        $wrapper["find"](".has-sub")["prepend"]('<span class="submenu-button"></span>');
        $wrapper["find"](".submenu-button")["on"]("click", function() {
          $(this)["toggleClass"]("submenu-opened");
          if ($(this)["siblings"]("ul")["hasClass"]("open")) {
            $(this)["siblings"]("ul")["removeClass"]("open")["slideToggle"](150);
          } else {
            $(this)["siblings"]("ul")["addClass"]("open")["slideToggle"](150);
          }
        });
      };
      if ("multitoggle" === aggregatedDataByFormat["format"]) {
        multiTg();
      } else {
        $wrapper["addClass"]("dropdown");
      }
      if (true === aggregatedDataByFormat["sticky"]) {
        $wrapper["css"]("position", "fixed");
      }
    });
  };
}(jQuery), function($) {
  $(document)["ready"](function() {
    $("#mudahmenu")["menumaker"]({
      format : "multitoggle"
    });
  });
}(jQuery);
var numposts=1,numposts2=4,showpostthumbnails=!0,showpostthumbnails2=!0,displaymore=!1,displaymore2=!1,showcommentnum=!0,showcommentnum2=!1,showpostdate=!0,showpostdate2=!0,showpostsummary=!0,numchars=75,thumb_width=280,thumb_height=200,thumb_width2=100,thumb_height2=100,no_thumb=&quot; https://lh3.googleusercontent.com/-htHpxFoFKFU/VtfvuTf4DwI/AAAAAAAAEVM/nJicgrZGWlk/s340-Ic42/newsmartpik_thumb.png&quot;,no_thumb2=&quot; https://lh3.googleusercontent.com/-v1FrVSrWAI4/VtfvuOMgx0I/AAAAAAAAEVI/dF8p7IUnk1k/s100-Ic42/newsmartpikthumb_small.png&quot;;
