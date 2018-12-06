$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$(".myartotop").addClass('mynabinf'):$(".myartotop").removeClass('mynabinf')}),$(".myartotop").click(function(){return $("html,body").animate({scrollTop:0},600),!1})});
//<![CDATA[
// Popular Post
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
//]]>
