// JavaScript Document



$(function(){
	$("input#name").val("お名前を入力してください").css("color","#bbb")
	.one("focus",function(){
		$(this).val("").css("color","#333");
	})
	.blur(function(){
		if($(this).val()==""){
			$(this).val("お名前を入力してください").css("color","#bbb")
			.one("focus",function(){
				$(this).val("").css("color","#333")
			});
		}
	});

	$("input#tel").val("電話番号を入力してください").css("color","#bbb")
	.one("focus",function(){
		$(this).val("").css("color","#333")	
	})
	.blur(function(){
		if($(this).val()==""){
			$(this).val("電話番号を入力してください").css("color","#bbb")
			.one("focus",function(){
				$(this).val("").css("color","#333")
			});
		}
	});
	
	$("#email").val("メールアドレスを入力してください").css("color","#bbb")
	.one("focus",function(){
		$(this).val("").css("color","#333")
	})
	.blur(function(){
		if($(this).val()==""){
			$(this).val("メールアドレスを入力してください").css("color","#bbb")
			.one("focus",function(){
				$(this).val("").css("color","#333")
			})
		}
	});
	
	$("#people").val("2").css("color","#bbb")
	.one("focus",function(){
		$(this).val("").css("color","#333")
	})
	.blur(function(){
		if($(this).val()==""){
			$(this).val("2").css("color","#bbb")
			.one("focus",function(){
				$(this).val("").css("color","#333")
			})
		}
	});
});


$(function(){
	$(":input").focus(function(){
		$(this).css("background","#fff8e4");
	})
	.blur(function(){
		$(this).css("background","");
	});
});


/*　チェックボックスを選択したら　お問い合わせ内容を変更する　*/


$(function(){
	$("#query").change(function(){
		$("#inquery").text("ご予約のお問い合わせ");
	});
	$("#question").change(function(){
		$("#inquery").text("お問い合わせ内容");
	});
	$("#etc").change(function(){
		$("#inquery").text("その他のお問い合わせ");
	});
});




jQuery(function($){

var nav = $('#header');/*varというのが変数を決める設定です。*/
	offset = nav.offset();
	
	$(window).scroll(function () {
		if($(window).scrollTop() > offset.top - 0){
			nav.css('top', $(window).scrollTop() - offset.top + 0);
			}
			else
			{
				nav.css('top', 0);	
			}
	});
});














