var loc = window.location.href+'';
if (loc.indexOf('http://')==0){
	window.location.href = loc.replace('http://','https://');	// https redirect
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}






$( document ).ready(function() {
	$( "#subscribebutton" ).click(function() {
		$( ".subscribeform" ).toggle();
		$( ".subscribecaptcha" ).toggle(300);
	});
	$( ".stopMusic" ).click(function() {
		document.getElementById("musicContainer").innerHTML = "<div class='musicstop'>Music stopped</div>";
	});
	$( "#clickHereButton" ).click(function() {
		document.getElementById("clickHereButton").innerHTML = "Not Found!";
	});
	$( "#downloadButton" ).click(function() {
		document.getElementById("downloadButton").innerHTML = "Error 404";
	});
	$( "#clickMeButton" ).click(function() {
		document.getElementById("clickMeButton").innerHTML = "Thank You!";
	});
	$( "#loadCss" ).click(function() {
		loadjscssfile("/prettyskin.css", "css");
	});
	$( "#mobiletoggle" ).click(function() {		//mobile toggle
		$( ".cleft ul" ).toggle();
	});
	$( "#backToUgly" ).click(function() {		//back to ugly clicked
		history.pushState('', document.title, window.location.pathname);
		$("link[href='/prettyskin.css']").remove();

	});
	if(window.location.hash) {
		var hash = window.location.hash.substring(1);
		if (hash == "white") {
			loadjscssfile("/prettyskin.css", "css");
		}
	}




});










$(window).load(function() {
	$('.marquee').marquee({
		//speed in milliseconds of the marquee
		duration: 9000,
		//gap in pixels between the tickers
		gap: 1000,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 500,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: false
	});
});

/**
 * jQuery.marquee - scrolling text like old marquee element
 * @author Aamir Afridi - aamirafridi(at)gmail(dot)com / http://aamirafridi.com/jquery/jquery-marquee-plugin
 */
;(function(d){d.fn.marquee=function(w){return this.each(function(){var a=d.extend({},d.fn.marquee.defaults,w),b=d(this),c,k,p,q,h,l=3,x="animation-play-state",e=!1,B=function(a,b,c){for(var d=["webkit","moz","MS","o",""],e=0;e<d.length;e++)d[e]||(b=b.toLowerCase()),a.addEventListener(d[e]+b,c,!1)},E=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);b.push();return"{"+b.join(",")+"}"},g={pause:function(){e&&a.allowCss3Support?c.css(x,"paused"):d.fn.pause&&c.pause();b.data("runningStatus",
"paused");b.trigger("paused")},resume:function(){e&&a.allowCss3Support?c.css(x,"running"):d.fn.resume&&c.resume();b.data("runningStatus","resumed");b.trigger("resumed")},toggle:function(){g["resumed"==b.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(b.timer);b.css("visibility","hidden").html(b.find(".js-marquee:first"));setTimeout(function(){b.css("visibility","visible")},0)}};if("string"===typeof w)d.isFunction(g[w])&&(c||(c=b.find(".js-marquee-wrapper")),!0===b.data("css3AnimationIsSupported")&&
(e=!0),g[w]());else{var r;d.each(a,function(c,d){r=b.attr("data-"+c);if("undefined"!==typeof r){switch(r){case "true":r=!0;break;case "false":r=!1}a[c]=r}});a.duration=a.speed||a.duration;q="up"==a.direction||"down"==a.direction;a.gap=a.duplicated?a.gap:0;b.wrapInner('<div class="js-marquee"></div>');var f=b.find(".js-marquee").css({"margin-right":a.gap,"float":"left"});a.duplicated&&f.clone(!0).appendTo(b);b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');c=b.find(".js-marquee-wrapper");
if(q){var m=b.height();c.removeAttr("style");b.height(m);b.find(".js-marquee").css({"float":"none","margin-bottom":a.gap,"margin-right":0});a.duplicated&&b.find(".js-marquee:last").css({"margin-bottom":0});var s=b.find(".js-marquee:first").height()+a.gap;a.duration*=(parseInt(s,10)+parseInt(m,10))/parseInt(m,10)}else h=b.find(".js-marquee:first").width()+a.gap,k=b.width(),a.duration*=(parseInt(h,10)+parseInt(k,10))/parseInt(k,10);a.duplicated&&(a.duration/=2);if(a.allowCss3Support){var f=document.body||
document.createElement("div"),n="marqueeAnimation-"+Math.floor(1E7*Math.random()),z=["Webkit","Moz","O","ms","Khtml"],A="animation",t="",u="";f.style.animation&&(u="@keyframes "+n+" ",e=!0);if(!1===e)for(var y=0;y<z.length;y++)if(void 0!==f.style[z[y]+"AnimationName"]){f="-"+z[y].toLowerCase()+"-";A=f+A;x=f+x;u="@"+f+"keyframes "+n+" ";e=!0;break}e&&(t=n+" "+a.duration/1E3+"s "+a.delayBeforeStart/1E3+"s infinite "+a.css3easing,b.data("css3AnimationIsSupported",!0))}var C=function(){c.css("margin-top",
"up"==a.direction?m+"px":"-"+s+"px")},D=function(){c.css("margin-left","left"==a.direction?k+"px":"-"+h+"px")};a.duplicated?(q?c.css("margin-top","up"==a.direction?m:"-"+(2*s-a.gap)+"px"):c.css("margin-left","left"==a.direction?k+"px":"-"+(2*h-a.gap)+"px"),l=1):q?C():D();var v=function(){a.duplicated&&(1===l?(a._originalDuration=a.duration,a.duration=q?"up"==a.direction?a.duration+m/(s/a.duration):2*a.duration:"left"==a.direction?a.duration+k/(h/a.duration):2*a.duration,t&&(t=n+" "+a.duration/1E3+
"s "+a.delayBeforeStart/1E3+"s "+a.css3easing),l++):2===l&&(a.duration=a._originalDuration,t&&(n+="0",u=d.trim(u)+"0 ",t=n+" "+a.duration/1E3+"s 0s infinite "+a.css3easing),l++));q?a.duplicated?(2<l&&c.css("margin-top","up"==a.direction?0:"-"+s+"px"),p={"margin-top":"up"==a.direction?"-"+s+"px":0}):(C(),p={"margin-top":"up"==a.direction?"-"+c.height()+"px":m+"px"}):a.duplicated?(2<l&&c.css("margin-left","left"==a.direction?0:"-"+h+"px"),p={"margin-left":"left"==a.direction?"-"+h+"px":0}):(D(),p={"margin-left":"left"==
a.direction?"-"+h+"px":k+"px"});b.trigger("beforeStarting");if(e){c.css(A,t);var f=u+" { 100%  "+E(p)+"}",g=d("style");0!==g.length?g.filter(":last").append(f):d("head").append("<style>"+f+"</style>");B(c[0],"AnimationIteration",function(){b.trigger("finished")});B(c[0],"AnimationEnd",function(){v();b.trigger("finished")})}else c.animate(p,a.duration,a.easing,function(){b.trigger("finished");a.pauseOnCycle?b.timer=setTimeout(v,a.delayBeforeStart):v()});b.data("runningStatus","resumed")};b.bind("pause",
g.pause);b.bind("resume",g.resume);a.pauseOnHover&&b.bind("mouseenter mouseleave",g.toggle);e&&a.allowCss3Support?v():b.timer=setTimeout(v,a.delayBeforeStart)}})};d.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1E3,direction:"left",duplicated:!1,duration:5E3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}})(jQuery);






/* jseyes.js
The classic Xeyes in JavaScript
(c) PROPIX Ltd,  Written by Pintér Gábor
Székesfehérvár, Kriványi u. 15.
H-8000, HUNGARY
Tel: +36 30 3489752
Fax: +36 22 304326
Email: propix@freemail.hu
Web: http://www.propix.hu
Revisions:
  V1.0  10/14/2001  Original release
		V1.1  02/20/2008: Updated by JavaScriptKit.com to work in the latest browsers (IE7, FF etc)
Usage:
  1. Include this file from the head of your page
  2. Define parameters or accept the defaults
  3. Insert the image
This script requires Internet Explorer 5+ or Nescape Navigator 6+! In other browsers it does nothing.
1. Include jseyes.js from the head of your page
Insert the following line into the head of your page:
  <script src="jseyes.js"></script>
2. Define parameters
You can accept the defaults or assign new values to these variables:
jseyesimg="jseyes.gif"
  The main image. Please do not edit.
jseyeimg="jseyeblue.gif"
  The image of the eye. Must be a 21x29 solid ellipse with transparent background.
4. Insert the image
Call jseyes() where you want to see the image:
  <script>
    jseyes();
  </script>
Or call jseyes(x, y) to show the image at absolute position:
  <script>
    jseyes(100,100);
  </script>
Example: http://www.propix.hu/www/jseyes/jseyes.html
*/
// Defaults
var jseyesimg="/img/jseyes.gif";
var jseyeimg="/img/jseyeblue.gif";
// Internal
var jseyeso=null, jseye1=null, jseye2=null;
var standardbody=(document.compatMode=="CSS1Compat")? document.documentElement : document.body //create reference to common "body" across doctypes
// General utils
// Find object by name or id
function jseyesobj(id) {
  var i, x;
  x= document[id];
  if (!x && document.getElementById) x= document.getElementById(id);
  for (i=0; !x && i<document.forms.length; i++) x= document.forms[i][id];
  return(x);
}
// Move eyes
function jseyesmove(x, y) {
  var ex, ey, dx, dy;
  if (jseyeso && jseye1 && jseye2 && jseyeso.style) {
    ex=jseyeso.offsetLeft+46; ey=jseyeso.offsetTop+58;
    dx=x-ex; dy=y-ey;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye1.style.left= r*dx+66.5+'px'; jseye1.style.top= r*dy+44+'px';
    ex+=56; dx-=56;
    r=(dx*dx/49+dy*dy/289<1) ? 1 : Math.sqrt(49*289/(dx*dx*289+dy*dy*49));
    jseye2.style.left= r*dx+92.5+'px'; jseye2.style.top= r*dy+44+'px';
  }
}
// Main
function jseyes() {
  var img;
  var x, y, a=false;
  if (arguments.length==2) {
    x= arguments[0];
    y= arguments[1];
    a= true;
  }
    img= "<div id='jseyeslayer' style='position:"+
           (a ? "absolute; left:"+x+"; top:"+y : "relative")+
           "; z-index:5; width:150; height:150 overflow:hidden'>"+
	     "<div id='jseye1' style='position:absolute; left:36; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 >"+
	     "</div>"+
	     "<div id='jseye2' style='position:absolute; left:92; top:44; z-index:6; width:21; height:29'>"+
	       "<img src='"+jseyeimg+"' width=21 height=29 >"+
	     "</div>"+
	     "<img src='"+jseyesimg+"' width=150 height=150 >"+
	 "</div>";
    document.write(img);
    jseyeso=jseyesobj('jseyeslayer');
    jseye1=jseyesobj('jseye1');
    jseye2=jseyesobj('jseye2');
    document.onmousemove=jseyesmousemove;
}
// Mouse move events
function jseyesmousemove(e) {
		var mousex=(e)? e.pageX : event.clientX+standardbody.scrollLeft
		var mousey=(e)? e.pageY : event.clientY+standardbody.scrollTop
  jseyesmove(mousex, mousey);
  //return(false);
}














// array to store our Snowflake objects
var snowflakes = [];
// global variables to store our browser's window size
var browserWidth;
var browserHeight;
// specify the number of snowflakes you want visible
var numberOfSnowflakes = 25;
//
// listen for "DOMContentLoaded", "resize", and "focus" events and handle them
//
function setup() {
	this.addEventListener("DOMContentLoaded", generateSnowFlakes, true);
	this.addEventListener("resize", resetPositions, true);
	this.addEventListener("focus", tabHasFocus, true);
}
setup();
//
// constructor for our Snowflake class
//
function Snowflake(element, radius, speed, width, xPos, yPos) {
	// set initial snowflake properties
    this.element = element;
    this.radius = radius;
    this.speed = speed;
    this.width = width;
    this.xPos = xPos;
    this.yPos = yPos;
	// declare variables used for snowflake's motion
    this.counter = 0;
    var sign = Math.floor(Math.random() * 2);
    if (sign == 1) {
        sign = -1;
    } else {
        sign = 1;
    }
	// setting an initial opacity and size for our snowflake
    this.element.style.opacity = .1 + Math.random();
    this.element.style.fontSize = 12+Math.random()*50 + "px";
	// the function responsible for actually moving our snowflake
    this.update = function () {
		// using some trigonometry to determine our x and y position
        this.counter += speed/300;
        this.xPos += sign*speed*Math.cos(this.counter)/20;
        this.yPos += speed/10;
		// setting our snowflake's position
        this.element.style.left = Math.round(this.xPos) + "px";
        this.element.style.top = Math.round(this.yPos) + "px";
        // if snowflake goes below the browser window, move it back to the top
        if (this.yPos > browserHeight) {
        	this.yPos = -50;
        }
    }
}
//
// the function responsible for creating the snowflake and letting them
// fall in their merry way
//
function generateSnowFlakes(e) {
	// get our snowflake element from the DOM and store it
    var originalSnowflake = document.getElementsByClassName("snowflake")[0];
    // access our snowflake element's parent container
    var snowflakeContainer = originalSnowflake.parentNode;
    // set our browser's size
    browserHeight = window.outerHeight;
    browserWidth = window.outerWidth;
    // create each individual snowflake
    for (var i = 0; i < numberOfSnowflakes; i++) {
    	// clone our original snowflake and add it to snowflakeContainer
        var snowflakeCopy = originalSnowflake.cloneNode(true);
        snowflakeContainer.appendChild(snowflakeCopy);
		// set our snowflake's initial position and related properties
        var initialXPos = setPosition(50, browserWidth);
        var initialYPos = setPosition(50, browserHeight);
        var speed = 5 + Math.random() * 40;
        var radius = 4+Math.random() * 10;

        // create our Snowflake object
        var snowflakeObject = new Snowflake(snowflakeCopy, radius, speed, 0, initialXPos, initialYPos );
        snowflakes.push(snowflakeObject);
    }
    // remove the original snowflake because we no longer need it visible
	snowflakeContainer.removeChild(originalSnowflake);
	// call the moveSnowflakes function every 30 milliseconds
    setInterval(moveSnowflakes, 30);
}
//
// responsible for moving each snowflake by calling its update function
//
function moveSnowflakes() {
    for (var i = 0; i < snowflakes.length; i++) {
        var snowflake = snowflakes[i];
        snowflake.update();
    }
}
//
// this function returns a number between (maximum-offset) and (maximum+offset)
//
function setPosition(offset, maximum) {
	return Math.round(-1*offset + Math.random() * (maximum+2*offset));
}
//
// resets the position of all the snowflakes to a new value
//
function resetPositions(e) {
	browserHeight = window.outerHeight;
    browserWidth = window.outerWidth;
	for (var i = 0; i < snowflakes.length; i++) {

        var snowflake = snowflakes[i];
        snowflake.xPos = setPosition(50, browserWidth);
        snowflake.yPos = setPosition(50, browserHeight);
    }
}
//
// this function handles the case where the snowflakes aren't positioned correctly
// because the document was opened as a background tab
//
function tabHasFocus() {
	resetPositions(null);
	this.removeEventListener("focus", tabHasFocus, true);
}
