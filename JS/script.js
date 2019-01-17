/*scroll do menu*/

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-50},  800);
    });
});


/*Mudar a cor do menu*/

$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('mudaCor');
    }
    else {
    $('#nav').removeClass('mudaCor');
    }
  });
});



/*scroll do botão voltar ao topo*/

$('.btn-topo').click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: 0}, 800);
});

/*botão aparecer no time certo*/

$(window).scroll(function(){
    if( $(this).scrollTop()>100){
        $('.btn-topo').fadeIn('slow');
    } else{
        $('.btn-topo').fadeOut('slow');
    }
});

$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 

new WOW (). init ();

$(document).ready(function(){
    $('.menu-mobile').click(function(){
        $('nav').toggleClass('active')
    })
})