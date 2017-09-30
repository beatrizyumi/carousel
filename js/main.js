$(document).ready(function(){

	var quantidade = $('.banner img').length;
	var bannerAtual = 0;
	var tamanhoImagem = -$('.banner img').width();
	var deslocamento = bannerAtual*tamanhoImagem;

	$('.img-esquerda').css({'top':$('.banner').position().top});
	$('.img-direita').css({'top':$('.banner').position().top});

	for(var contador = 0; contador<quantidade; contador++) {
		$('.botoes').append('<button></button>');
		if (contador == 0) {
			$('.botoes button').addClass('botaoAtual');
		}
	};

	$('.botoes button').eq(0).css({'background-color':'rgba(#000, 0.5'});

	$('.esquerda').on('click', function(){
		if (bannerAtual == (quantidade-1)) {
			bannerAtual = 0;
		} else {
			bannerAtual++;
		};
		deslocamento = bannerAtual*tamanhoImagem;
		$('.banner').css({'transform': 'translateX('+deslocamento+'px)'});
		$('.botoes button').removeClass('botaoAtual');
		$('.botoes button').eq(bannerAtual).addClass('botaoAtual');
		if (bannerAtual == 4) {
			$('.img-esquerda').css({'transform': 'translateX('+tamanhoImagem+'px)'});
		}
	});

	$('.direita').on('click', function(){
		if (bannerAtual == (quantidade-1)) {
			bannerAtual = 0;
		} else {
			bannerAtual++;
		};
		deslocamento = bannerAtual*tamanhoImagem;
		$('.banner').css({'transform': 'translateX('+deslocamento+'px)'});
		$('.botoes button').removeClass('botaoAtual');
		$('.botoes button').eq(bannerAtual).addClass('botaoAtual');
	});

	$(document).on('click', '.botoes button', function(){
		var botaoAtual = $(this).index();
		$('.botoes button').removeClass('botaoAtual');
		$(this).addClass('botaoAtual');
		bannerAtual = botaoAtual;
		deslocamento = botaoAtual*tamanhoImagem;
		$('.banner').css({'transform': 'translateX('+deslocamento+'px)'});
	});

});