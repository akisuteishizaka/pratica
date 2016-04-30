// JavaScript Document
/*
プラティーカのjQuery　ファイル

作成日　2012.02.04
*/


/*イメージ背景が画面いっぱいに広がる設定ここから*/

$(function(){
	setSize();
	$(window).risize(function(){
		setSize();	
	});
	
});

function setSize() {
	var imgW = 2000;
	var imgH = 1332;

/*ウインドウサイズの取得*/	

	var winW = $(window).width();
	var winH = $(window).height();
	var scaleW = winW / imgW;
	var scaleH = winH / imgH;
	var fixScale = Math.max(scaleW, scaleH);
	var setW = imgW * fixScale;
	var setH = imgH * fixScale;
	var moveX = Math.floor((winW - setW) / 2);
	var moveY = Math.floor((winH - setH) / 2);
	
	$("#bg").css({
		"width": setW,
		"height": setH,
		"left": moveX,
		"top": moveY
	});
}

/*イメージ背景が画面いっぱいに広がる設定ここまで*/


/*グーグルマップをいれる　設定　ここから*/

function initialize() {
	var latlng = new google.maps.LatLng(35.659009,139.334962);
	var opts = {
		zoom: 19,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("map_canvas"), opts);
}


/*グーグルマップをいれる　設定　ここから*/


/*フォーム　の　設定　ここから*/

$(function(){
	$("p#submit").click(function(){
		$("th").text($("input").val()+"にメール送信します");
		$("p#submit").text("送信");	
	});
});


/*フォーム　の　設定　ここまで*/






























