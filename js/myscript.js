$(document).ready(function() {
	$('.content').hide();
	$('.decade-wrapper').hide();
	$('.event').hide();
	$('.upper-button').hide();

	//open decade

	$('.round-border').click(function(){
		var buttonData = $(this).attr('data');
		$('.decade-wrapper'+'*[data=' + buttonData + ']').slideDown();
		$('.event'+'*[data=' + buttonData + ']').slideDown();
		$('.wrapper'+'*[data=' + buttonData + ']').fadeOut(100);

	});

	//open .content

	$('.round-border').click(function(){
		var buttonData = $(this).attr('data');
		$('.content'+'*[data=' + buttonData + ']').slideDown();
		$('.wrapper'+'*[data=' + buttonData + ']').fadeOut(100);
	});
	
	//clouse .content

	$('.content').click(function(){
		$(this).slideUp(500);
		var buttonData = $(this).attr('data');
		var wrapperShow = function(){
		$('.wrapper'+'*[data=' + buttonData + ']').fadeIn('slow');
		}
		setTimeout(wrapperShow, 500);
	});

	// clouse decade

	$('.clouse').click(function(){
		$(this).parent().slideUp();
		var buttonData = $(this).attr('data');
		var wrapperShow = function(){
		$('.wrapper'+'*[data=' + buttonData + ']').fadeIn('slow');
		}
		setTimeout(wrapperShow, 500);
	});

	//scrollDown

	$('.nav a').click(function(){
		elementClick = $(this).attr("href");  //destination attr   
		destination = $(elementClick).offset().top; //destination 
		
		$('html, body').animate( { scrollTop: destination }, 1100 );
		var upperButtonHide = function(){
			$('.upper-button').fadeIn('slow');
		}
		setTimeout(upperButtonHide, 1200);
		return false; //отменяет действие по умолчанию

	});

	//upper button
    var heightScreen = $(window).height();
    
    $(window).scroll(function(){
    	if(heightScreen < $(document).scrollTop()){
    		$('.upper-button').fadeIn('slow');
    	} else if(heightScreen > $(document).scrollTop()) {
    		$('.upper-button').hide();
    	}
	});

	//scrollUp

	$('.upper-button a').click(function(){
		elementClick = $(this).attr("href");  //destination attr   
		destination = $(elementClick).offset().top; //destination 
		
		$('html, body').animate( { scrollTop: destination }, 1100 );
		return false; //отменяет действие по умолчанию
	});
});