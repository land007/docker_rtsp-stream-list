$(function(){if("string"==typeof require){var d=require("nw.gui").Window.get();d.maximize();document.querySelector("#full").addEventListener("click",function(a){d.enterFullscreen()},!1);document.querySelector("#exitFull").addEventListener("click",function(a){d.leaveFullscreen()},!1)}});var room="all";
$(function(){var d=document.getElementById("container"),a=io();ss.createStream();var e={};$("form").submit(function(){a.emit("chat message",$("#m").val());$("#m").val("");return!1});a.on("chat message",function(c){$("#messages").append($("<li>").text(c))});a.on("h264",function(c){var b=c[0];3==b&&console.log(3);var a=document.getElementById("video-canvas"+b);null==a&&(a=document.createElement("canvas"),a.id="video-canvas"+b,a.className="mask",a.style.zIndex="9999",a.style.zoom=1,d.appendChild(a),
e[b]=void 0!==JSMpeg.Source?new JSMpeg.Player(null,{canvas:document.getElementById("video-canvas"+b),source:JSMpeg.Source.Stream}):new (new JSMpeg).Player("pipe",{canvas:document.getElementById("video-canvas"+b)}));c=c[1];void 0!==JSMpeg.Source?e[b].source.write(c):e[b].write(c,function(){})});a.on("del rtsp",function(a){console.log("del rtsp\uff1a"+JSON.stringify(a));setTimeout(function(){var b=document.getElementById("video-canvas"+a);null!=b&&b.parentNode.removeChild(b)},1E3)});a.on("get room",
function(c){console.log("get room\uff1a"+JSON.stringify(c));a.emit("subscribe",{room:room})})});