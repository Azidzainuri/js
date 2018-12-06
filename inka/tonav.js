function myar_thumb_size(e,t){var n=240;var r=160;image_tag='<img width="'+n+'" height="'+r+'" src="'+e.replace("/s72-c/","/w"+n+"-h"+r+"-c/")+'" alt="'+t.replace(/"/g,"")+'" title="'+t.replace(/"/g,"")+'" class="post-thumbnail"/>';if(t!="")return image_tag;else return""}
//CSS Ready
function loadCSS(e,t,o){"use strict";var s=window.document.createElement("link"),n=t||window.document.getElementsByTagName("script")[0];s.rel="stylesheet",s.href=e,s.media="only x",n.parentNode.insertBefore(s,n),setTimeout(function(){s.media=o||"all"})}loadCSS("//fonts.googleapis.com/css?family=Google%20Sans:400,700"),loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
function labelthumbs(t){document.write('<ul class="'+outerclass+'">');for(var e=0;e<numposts;e++){var r,i=t.feed.entry[e],n=i.title.$t,l=i.category[0].term;if(e==t.feed.entry.length)break;for(var o=0;o<i.link.length;o++)if("alternate"==i.link[o].rel){r=i.link[o].href;break}var u;try{u=i.media$thumbnail.url}catch(m){s=i.content.$t,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),u=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://2.bp.blogspot.com/-mmjt8mh87bQ/VQ6ltMr8GxI/AAAAAAAAEfo/93SmjxkwmO0/s500-c/no-image-found.jpg"}var p=i.published.$t,v=p.substring(0,4),h=p.substring(5,7),f=p.substring(8,10),g=new Array;g[1]="January",g[2]="February",g[3]="March",g[4]="April",g[5]="May",g[6]="June",g[7]="July",g[8]="August",g[9]="September",g[10]="October",g[11]="November",g[12]="December";var A=g[parseInt(h,10)]+" "+f+", "+v;document.write(starttag+"<"+intag+' class="post">'),document.write('<div class="post-media"><div class="image-wrap"><img src="'+u.replace("/s72-c/","/s400-p/")+'" alt="'+n+'"/></div></div><div class="post-body">'),"featured-slider"==outerclass&&document.write('<span class="cat"><a href="/search/label/'+l+'">'+l+'</a></span><div class="post-title"><h4><a href="'+r+'">'+n+'</a></h4></div><div class="post-meta"><span class="post-date">'+A+"</span></div></div>"),"sub-menu"==outerclass&&document.write('<div class="post-title"><h2><a href="'+r+'">'+n+'</a></h2></div><span class="post-date">'+A+"</span></div>"),document.write("</"+intag+">"+endtag)}document.write("</ul>")};
// Featured
function removeHtmlTag(e,t){for(var s=e.split("<"),r=0;r<s.length;r++)-1!=s[r].indexOf(">")&&(s[r]=s[r].substring(s[r].indexOf(">")+1,s[r].length));return s=s.join(""),s=s.substring(0,t-1)}function sliderposts(e){j=showRandomImg?Math.floor((imgr.length+1)*Math.random()):0,img=new Array,numposts1<=e.feed.entry.length?maxpost=numposts1:maxpost=e.feed.entry.length;for(var t=0;t<maxpost;t++){var r,i,n=e.feed.entry[t],l=n.category[0].term,o=n.title.$t;if(t==e.feed.entry.length)break;for(var m=0;m<n.link.length;m++)if("alternate"==n.link[m].rel){i=n.link[m].href;break}for(var m=0;m<n.link.length;m++)if("replies"==n.link[m].rel&&"text/html"==n.link[m].type){r=n.link[m].title.split(" ")[0];break}if("content"in n)var g=n.content.$t;else if("summary"in n)var g=n.summary.$t;else var g="";postdate=n.published.$t,j>imgr.length-1&&(j=0),img[t]=imgr[j],s=g,a=s.indexOf("<img"),b=s.indexOf('src="',a),c=s.indexOf('"',b+5),d=s.substr(b+5,c-b-5),-1!=a&&-1!=b&&-1!=c&&""!=d&&(img[t]=d);for(var h=[1,2,3,4,5,6,7,8,9,10,11,12],p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],f=(postdate.split("-")[2].substring(0,2),postdate.split("-")[1]),u=(postdate.split("-")[0],0);u<h.length;u++)if(parseInt(f)==h[u]){f=p[u];break}if(0==t){var v='<div class="main-post col-post"><a href="'+i+'"><span class="blue">'+l+'</span><img src="'+img[t]+'" height="350" width="640" alt=""></img></a><header><h3 class="entry-title"><a href="'+i+'" title="">'+o+"</a></h3></header></div>";document.write(v)}else{var v='<div class="secondary-post col-post" style="margin-right:0"><span class="blue">'+l+'</span><a class="hover_play_small" href="'+i+'"><img src="'+img[t]+'" height="200" width="320"></img></a><header><h4><a href="'+i+'">'+o+"</a></h4></header></div>";document.write(v)}j++}}imgr=new Array,imgr[0]="http://sites.google.com/site/fdblogsite/Home/nothumbnail.gif",showRandomImg=!0,aBold=!0,summaryPost=150,summaryTitle=50,numposts1=10,featured_numposts="3";
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
