//PC・スマホ表示切替
$("head").append("<meta name='viewport' content="
	+($.cookie("switchScreen") == 1 ?
        "'width=801, user-scalable=yes'" :
        "'width=device-width, user-scalable=no'")
    +" />");
	
$(document).ready(function() {
    $("#btnPC, #btnSP").click(function() {
        $.cookie("switchScreen", $(this).attr("id") == "btnPC" ? 1 : 0);
        location.reload();
        return false;
    });
});



var bRun = 0;

function runShuffleEffect() {
bRun = 1;
$('#text').shuffleEffect(20);
setTimeout(function() {bRun = 0}, 2400);
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-30173032-2']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
//PC・スマホ表示切替終了



$(function(){
	$('#btnS').click(function(){
		$('p').css('font-size','0.7em');
		$('#btnS').css('background-color','#660066');
		$('#btnM').css('background-color','#ff00ff');
		$('#btnL').css('background-color','#ff00ff');
	});
});

$(function(){
	$('#btnM').click(function(){
		$('p').css('font-size','1em');
		$('#btnS').css('background-color','#ff00ff');
		$('#btnM').css('background-color','#660066');
		$('#btnL').css('background-color','#ff00ff');
	});
});

$(function(){
	$('#btnL').click(function(){
		$('p').css('font-size','1.4em');
		$('#btnS').css('background-color','#ff00ff');
		$('#btnM').css('background-color','#ff00ff');
		$('#btnL').css('background-color','#660066');
	});
});



$(function(){
	$('#btnleft').click(function(){
		$('#btn').css({
			left:'0',
			right:'auto',
		});
		$('#btnlr').css({
			left:'auto',
			right:'0',
		});
		$('#btnleft').css({
			display:'none',
		});
		$('#btnright').css({
			display:'inline',
		});
	});
});

$(function(){
	$('#btnright').click(function(){
		$('#btn').css({
			left:'auto',
			right:'0',
		});
		$('#btnlr').css({
			left:'0',
			right:'auto',
		});
		$('#btnleft').css({
			display:'inline',
		});
		$('#btnright').css({
			display:'none',
		});
	});
});

