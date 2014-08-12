$(document).ready(function() {
	$('.content').hide();
	$('.decade-wrapper').hide();
	$('.event').hide();

	$('.round-border').click(function(){
		var buttonData = $(this).attr('data');
		$('.decade-wrapper'+'*[data=' + buttonData + ']').slideDown();
		$('.event'+'*[data=' + buttonData + ']').slideDown();
		$('.wrapper'+'*[data=' + buttonData + ']').fadeOut(100);

	});

	$('.round-border').click(function(){
		var buttonData = $(this).attr('data');
		$('.content'+'*[data=' + buttonData + ']').slideDown();
		$('.wrapper'+'*[data=' + buttonData + ']').fadeOut(100);
	});
	

	$('.content').click(function(){
		$(this).slideUp(500);
		var buttonData = $(this).attr('data');
		var wrapperShow = function(){
		$('.wrapper'+'*[data=' + buttonData + ']').fadeIn('slow');
		}
		setTimeout(wrapperShow, 500);
	});

	$('.clouse').click(function(){
		$(this).parent().slideUp();
		var buttonData = $(this).attr('data');
		var wrapperShow = function(){
		$('.wrapper'+'*[data=' + buttonData + ']').fadeIn('slow');
		}
		setTimeout(wrapperShow, 500);
	});

	


});