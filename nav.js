$(document)["ready"](function() {
  $(window)["scroll"](function() {
    if ($(this)["scrollTop"]()) {
      $(".totop")["fadeIn"]();
    } else {
      $(".totop")["fadeOut"]();
    }
  });
  $(".totop")["click"](function() {
    $("html,body")["animate"]({
      scrollTop : 0
    }, 500);
  });
  var href = window["location"]["href"];
  $(".navlist li a,.navlist li ul li ul li a")["filter"](function() {
    return $(this)["prop"]("href") === href;
  })["parent"]("li")["addClass"]("current-menu-parent");
  var url = window["location"]["href"];
  $(".navlist li ul li a,.navlist li ul li a")["filter"](function() {
    return $(this)["prop"]("href") === url;
  })["parents"]("li")["parents"]("ul")["parent"]()["addClass"]("current-menu-parent");
  $(".navlist ul")["parent"]()["addClass"]("menu-item-has-children item-plus");
}), !function($) {
  function init() {
    if ($(".blog-timeline")["length"]) {
      var groupsize = $(window)["scrollTop"]();
      var new_height = $(window)["height"]();
      var duedate = $(".blog-timeline .content")["offset"]()["top"];
      var timeSubmittedDiff = groupsize - duedate;
      $(".pi-line")["css"]({
        top : "0",
        "-webkit-transform" : "translateY(" + timeSubmittedDiff + "px)",
        "-o-transform" : "translateY(" + timeSubmittedDiff + "px)",
        "-ms-transform" : "translateY(" + timeSubmittedDiff + "px)",
        "-moz-transform" : "translateY(" + timeSubmittedDiff + "px)",
        transform : "translateY(" + timeSubmittedDiff + "px)"
      });
      $(".blog-timeline .post-meta")["each"](function() {
        var options = $(this);
        var maxwidth = options["offset"]()["top"];
        var widthcorrection = maxwidth - new_height / 2;
        if (groupsize >= widthcorrection) {
          options["addClass"]("metaLight");
        } else {
          options["removeClass"]("metaLight");
        }
      });
    }
  }
function spyReadsAndWrites() {
    var rotateMsg = $(".infinite-nav");
    var maxReconnectTryTimes = $("#header")["offset"]()["top"] + $("#header")["outerHeight"]() - 0;
    var reconnectTryTimes = $(window)["scrollTop"]();
    if (reconnectTryTimes >= maxReconnectTryTimes) {
      rotateMsg["addClass"]("nav-fixed");
    } else {
      rotateMsg["removeClass"]("nav-fixed");
    }
  }
var isMobile = {
    Android : function() {
      return navigator["userAgent"]["match"](/Android/i);
    },
    BlackBerry : function() {
      return navigator["userAgent"]["match"](/BlackBerry/i);
    },
    iOS : function() {
      return navigator["userAgent"]["match"](/iPhone|iPad|iPod/i);
    },
    Opera : function() {
      return navigator["userAgent"]["match"](/Opera Mini/i);
    },
    Windows : function() {
      return navigator["userAgent"]["match"](/IEMobile/i);
    },
    any : function() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile["iOS"]() || isMobile.Opera() || isMobile.Windows();
    }
  };
  var _0xcc10x5 = (window["innerWidth"], $(window)["height"](), ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']);
var data = {
    obj : {
      subscribeEmail : $("#subscribe-email"),
      subscribeButton : $("#subscribe-button"),
      subscribeMsg : $("#subscribe-form .subscribe-status"),
      subscribeContent : $("#subscribe-form .form-remove"),
      dataMailchimp : $("#subscribe-form")["attr"]("data-mailchimp"),
      success_message : "Thank you for joining our mailing list. Please check your email for a confirmation link.",
      failure_message : "There was a problem processing your submission.",
      noticeError : "{msg}",
      noticeInfo : "{msg}",
      basicAction : "mail/subscribe.php",
      mailChimpAction : "mail/subscribe-mailchimp.php"
    },
    eventLoad : function() {
      var field = data["obj"];
      $(field["subscribeButton"])["on"]("click", function() {
        if ("" != field["subscribeEmail"]["val"]()) {
          if (window["ajaxCalling"]) {
            return;
          }
          var isInitialization = "true" === field["dataMailchimp"];
          data["ajaxCall"](isInitialization ? field["mailChimpAction"] : field["basicAction"]);
        } else {
          field["subscribeMsg"]["html"]("Email is required.")["fadeIn"]("slow");
        }
        return false;
      });
    },
    ajaxCall : function(url) {
      window["ajaxCalling"] = true;
      var field = data["obj"];
      var p = field["subscribeMsg"]["html"]("")["hide"]();
      field["subscribeButton"]["val"]("Sending");
      $["ajax"]({
        url : url,
        type : "POST",
        dataType : "json",
        data : {
          subscribeEmail : field["subscribeEmail"]["val"]()
        },
        error : function() {
          alert("Connection error");
        },
        complete : function() {
          window["ajaxCalling"] = false;
        }
      });
    }
  };
var Aside = function() {
    $(".twitter-slider")["owlCarousel"]({
      autoPlay : false,
      slideSpeed : 300,
      navigation : true,
      pagination : false,
      singleItem : true,
      autoHeight : true,
      transitionStyle : "fade",
      navigationText : ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>']
    });
  };
  $(document)["ready"](function() {
    data["eventLoad"]();
    if (isMobile["any"]()) {
      $("html")["addClass"]("ismobile");
    }
    $(document)["on"]("click", ".share-toggle", function() {
      var p = $(this);
      p["toggleClass"]("toggle-active");
      p["siblings"](".share")["toggleClass"]("share-active");
    });
    $(".search-box .icon-search")["on"]("click", function() {
      $(this)["toggleClass"]("active");
      $('.search-box input[type="search"]')["toggleClass"]("fadein");
    });
    $("html")["on"]("click", function() {
      $(".search-box .icon-search")["removeClass"]("active");
      $('.search-box input[type="search"]')["removeClass"]("fadein");
    });
    $(".search-box")["on"]("click", function(result) {
      result["stopPropagation"]();
    });
    $(".pi-line")["height"]($(window)["height"]() / 2);
    $(window)["scroll"](function() {
      init();
      spyReadsAndWrites();
    });
  });
  $(window)["on"]("load resize", function() {
    var $node = $(".sidebar-right");
    var snap = $(".sidebar-left");
    $node["closest"](".blog-standard")["find"](".content")["css"]("margin-right", "100px");
    snap["closest"](".blog-standard")["find"](".content")["css"]({
      "margin-left" : "30px",
      "margin-right" : "70px"
    });
    $node["closest"](".blog-grid, .blog-list, .blog-timeline")["find"](".content")["css"]("margin-right", "30px");
    snap["closest"](".blog-grid, .blog-list, .blog-timeline")["find"](".content")["css"]("margin-left", "30px");
    snap["closest"](".blog-content")["find"](".col-md-9")["addClass"]("col-md-push-3");
    snap["closest"](".blog-content")["find"](".col-md-3")["addClass"]("col-md-pull-9");
    $(".blog-standard .post")["each"](function() {
      var $wrapper = $(this);
      var navy = $wrapper["find"](".post-meta");
      var undefined = $wrapper["find"](".post-title");
      var maybeServices = $wrapper["find"](".post-media");
      navy["insertAfter"](window["innerWidth"] < 992 ? undefined : maybeServices);
    });
    $(".blog-list .post")["each"](function() {
      var $wrapper = $(this);
      var _this = $wrapper["find"](".post-meta");
      var templatePathFrom = $wrapper["find"](".post-title");
      var _el = $wrapper["find"](".post-author");
      $wrapper["find"](".post-media");
      _el["insertAfter"](_this["children"]()["first"]());
      _this["insertAfter"](templatePathFrom);
    });
    $(".infinite-nav")["each"](function() {
      var element = $(this);
      var p = element["find"](".open-menu");
      var ruleSet = element["find"](".close-menu");
      var options = element["find"](".navlist");
      var object = element["find"](".sub-menu");
      var $wrapper = $("#header");
      var inner = window["innerWidth"];
      var _0xcc10x9 = $(window)["height"]();
      var costSum = element["data"]("menu-responsive");
      if (costSum > inner) {
        p["show"]();
        $wrapper["addClass"]("header-responsive");
        options["addClass"]("off-canvas")["css"]("height", _0xcc10x9 - 0);
        options["children"](".menu-item-has-children")["removeClass"]("item-plus");
        if (0 === element["find"](".submenu-toggle")["length"]) {
          $(".menu-item-has-children, .navList > .menu-item-language-current")["children"]("a")["after"]('<span class="submenu-toggle"><i class="fa fa-angle-right"></i></span>');
          options["on"]("click", ".submenu-toggle", function(result) {
            result["preventDefault"]();
            $(this)["siblings"](".sub-menu")["addClass"]("sub-menu-active");
          });
        }
        object["each"](function() {
          var p = $(this);
          if (0 === p["find"](".back-mb")["length"]) {
            p["prepend"]('<li class="back-mb"><a href="#">Back</a></li>');
          }
          element["on"]("click", ".back-mb a", function(result) {
            result["preventDefault"]();
            $(this)["parent"]()["parent"]()["removeClass"]("sub-menu-active");
          });
        });
        p["on"]("click", function() {
          options["addClass"]("off-canvas-active");
          $(this)["addClass"]("toggle-active");
          ruleSet["show"]();
        });
        ruleSet["on"]("click", function() {
          options["removeClass"]("off-canvas-active");
          p["removeClass"]("toggle-active");
          $(".sub-menu")["removeClass"]("sub-menu-active");
          $(this)["hide"]();
        });
        $("html")["on"]("click", function() {
          options["removeClass"]("off-canvas-active");
          p["removeClass"]("toggle-active");
          $(".sub-menu")["removeClass"]("sub-menu-active");
          ruleSet["hide"]();
        });
        element["on"]("click", function(result) {
          result["stopPropagation"]();
        });
      } else {
        p["hide"]();
        $wrapper["removeClass"]("header-responsive");
        options["removeClass"]("off-canvas")["css"]("height", "auto");
        options["children"](".menu-item-has-children")["addClass"]("item-plus");
        $(".back-mb, .submenu-toggle")["remove"]();
      }
    });
  });
}(jQuery);
// Back to top button
$(function(){$(window).scroll(function(){$(this).scrollTop()>600?$(".myartotop").addClass('mynabinf'):$(".myartotop").removeClass('mynabinf')}),$(".myartotop").click(function(){return $("html,body").animate({scrollTop:0},600),!1})});
