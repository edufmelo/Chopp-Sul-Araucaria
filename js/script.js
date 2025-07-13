$(document).ready(function(){
    const carrosselWrapper = document.querySelector('.carrossel');
    const slides = document.querySelectorAll('.bloco');
    const prevButton = document.getElementById('carrossel-prev');
    const nextButton = document.getElementById('carrossel-next');

    if (!carrosselWrapper || slides.length === 0 || !prevButton || !nextButton) {
        console.error('Elementos essenciais do carrossel não foram encontrados.');
        return;
    }

    let currentIndex = 0; // Inicia com o primeiro item como central

    // Função para centralizar o slide ativo
    function centerActiveSlide() {
        const activeSlide = slides[currentIndex];
        if (!activeSlide) return;

        const container = carrosselWrapper.parentElement;
        const containerWidth = container.offsetWidth;
        const slideWidth = activeSlide.offsetWidth;

        // Pega o valor do 'gap' diretamente do CSS do carrossel
        const style = window.getComputedStyle(carrosselWrapper);
        const gap = parseInt(style.getPropertyValue('gap')) || 0;

        // --- CÁLCULO REFINADO ---
        // Calcula a posição inicial de todos os slides até o ativo.
        // Somamos a largura de cada slide anterior (index < currentIndex) e o gap entre eles.
        let totalOffset = 0;
        for (let i = 0; i < currentIndex; i++) {
            totalOffset += slides[i].offsetWidth + gap;
        }

        // O ponto central do slide ativo é sua largura/2 somada ao deslocamento total anterior.
        const slideCenter = totalOffset + (slideWidth / 2);
        // O ponto central do contêiner.
        const containerCenter = containerWidth / 2;

        // O deslocamento final é a diferença para alinhar os dois centros.
        const offset = containerCenter - slideCenter;

        carrosselWrapper.style.transform = `translateX(${offset}px)`;
    }
    // Função que atualiza a aparência dos slides e chama a centralização
    function updatecarrossel() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'side');

            if (index === currentIndex) {
                slide.classList.add('active');
            } else if (index === currentIndex - 1 || index === currentIndex + 1) {
                slide.classList.add('side');
            }
        });

        centerActiveSlide();
        AtualizaBotoes();
    }

    // Função para atualizar o estado dos botões
    function AtualizaBotoes() {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= slides.length - 1;

        const disabledStyle = { opacity: '0.5', cursor: 'not-allowed' };
        const enabledStyle = { opacity: '1', cursor: 'pointer' };

        Object.assign(prevButton.style, prevButton.disabled ? disabledStyle : enabledStyle);
        Object.assign(nextButton.style, nextButton.disabled ? disabledStyle : enabledStyle);
    }

    // Evento de clique para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updatecarrossel();
        }
    });

    // Evento de clique para o botão "Anterior"
    prevButton.addEventListener('click',() => {
        if (currentIndex > 0) {
            currentIndex--;
            updatecarrossel();
        }
    });

    $(document).on('keydown', function (event) { // Adiciona suporte a navegação por teclado - Perguntar se o Bruno quer isso
        if (event.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                updatecarrossel();
            }
        } else if (event.key === 'ArrowRight') {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                updatecarrossel();
            }
        }
    });

    // Adiciona evento de clique em cada slide para centralizá-lo
    slides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
             // Se o slide clicado já não for o ativo, atualiza o carrossel
            if (currentIndex !== index) {
                currentIndex = index;
                updatecarrossel();
            }

            // Abertura do modal não foi alterada, mas o clique no slide não deve interferir
            // na centralização se ele já estiver ativo.
            if (e.target.classList.contains('galeria') || e.target.classList.contains('titulo-prod')) {
                const modalId = slide.closest('.bloco').getAttribute('data-modal');
                 if (modalId) {
                    abrirModal(modalId);
                }
            }
        });
    });
    
    // Funções auxiliares e outros scripts
    alternarPalavras();
    waitForElement('.nossos-produtos', () => $('.nossos-produtos').css('display', 'block'));
    waitForElement('.Btn-whats', () => $('.Btn-whats').css('display', 'flex'));

    // Inicializa o carrossel na posição correta
    updatecarrossel();
    
    // Atualiza o carrossel no redimensionamento da janela para manter a centralização
    window.addEventListener('resize', centerActiveSlide);

    $("#check-apple").on("click", function() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const bgColor = $("header").css("background-color");

    if (bgColor === "rgb(0, 0, 0)") {
        // Tema claro
        $("header").css("background", "#F6AA01");
        $("#itens-menu a").css("color", "rgb(0, 0, 0)");
        $("#logo img").attr("src","images/logos/logo-black.png");
        $("btn-abrir-menu i").css("color", "#F6BD32");
        
        $(".central h1").css("color","#F6AA01");
        $(".central p").css("color","#F6AA01");
        $(".Btn-whats").css("background-color","#F6AA01");
        $(".central").css("background-image", "url('images/wallpapers/blackbackground.png')");

        $("#produtos").css("background-image","url('images/wallpapers/yellow.png')");
        $(".nossos-produtos").css("color","#000000");
        $(".titulo-prod").css("color","#000000");
        // Atualizar cores do carrossel
        $(".carrossel-nav").css({
            "background-color": "#000000",
            "color": "#F6AA01",
            "border": "1px solid #F6AA01"
        });

        $("#sobre").css("background-image", "url('images/wallpapers/black.png')");
        $("#subtitulo-sobre").css("color","#808080");
        $("#sobre").css("color","#F6AA01");
        $("#instagram-sobre").attr("src","images/icons/instagram-amarelo.png");
        $("#facebook-sobre").attr("src","images/icons/facebook-amarelo.png");

        $("#contato").css("background-image", "url('images/wallpapers/contato-amarelo.png')");
        $("#contato").css("color","#553900");
        $("#whatsapp-contato").attr("src","images/icons/whatsapp-brown.png");
        $("#email-contato").attr("src","images/icons/email-brown.png");
        $("#telefone-contato").attr("src","images/icons/telefone-brown.png");
        $("#instagram-contato").attr("src","images/icons/instagram-brown.png");
        $(".subtitulo-contato").css("color","#000000");

        $("#calculadora").css("background-image","url('images/wallpapers/black.png')");
        $("#calcular").css("background-color","#8f0404");
        $("#calcular").hover(
            function() { $(this).css("background-color", "#b40404"); },
            function() { $(this).css("background-color", "#8f0404"); }
        );
        $("#resultado").css("border","2px solid #382500ff");
        $("#resultado").css("background-color","#f6a80148");
        $("#resultado h3").css("color","#382500ff");
        $("#resultado p").css("color","#382500ff");
        $("#calculadora-chopp").css("background-color","#F6AA01");
        $("#calculadora-chopp").css("box-shadow","0 20px 40px rgba(250, 188, 55, 0.15)");
        $("#calculadora-chopp h2").css("color","#382500ff");
        $("#calculadora-chopp h4").css("color","#382500ff");
        $("#calculadora-chopp label").css("color","#382500ff");

        $("footer").css("background-color","#F6AA01");
        $("footer").css("color","#000000");
        $(".footer-bottom").css("color","#553900");
        $(".footer-divider").css("border-top","1px solid #000000");
        $(".logo-footer").attr("src","images/logos/logo-black.png");
        $(".desenvolvedor").css("color","black");
        $("#wpp-footer").attr("src","images/icons/whatsapp-brown.png");
        $("#insta-footer").attr("src","images/icons/instagram-brown.png");
        $("#face-footer").attr("src","images/icons/facebook-brown.png");
        $("#logo-melo").attr("src","images/logos/logo-melo-preta.png");
        
        if (mediaQuery.matches) {
            $(".btn-abrir-menu i").css("color","black");
        } 
    } else {
        // Tema escuro
        $("header").css("background", "#000000");
        $("#itens-menu a").css("color", "#F6BD32");
        $("#logo img").attr("src","images/logos/logo-yellow.png");
        $(".btn-abrir-menu i").css("color","#F6BD32");

        $(".central h1").css("color","#000000");
        $(".central p").css("color","#000000");
        $(".Btn-whats").css("background-color","#000000");
        $(".central").css("background-image", "url('images/wallpapers/yellowbackground.png')");

        $("#produtos").css("background-image","url('images/wallpapers/black.png')");
        $(".nossos-produtos").css("color","#F6AA01");
        $(".morango").css("color","#dc5667");
        $(".ice").css("color","#407a88");
        $(".vinho-branco").css("color","#b6cea2");
        $(".vinho-tinto").css("color","#cc2c29");
        $(".pilsen").css("color","#d2c9bf");
        $(".golden").css("color","#ffc300");
        $(".vosgeral").css("color","#4f7374");
        $(".carrossel-nav").css({
            "background-color": "rgba(246, 170, 1, 0.8)",
            "color": "#000",
            "border": "1px solid #000000"
        });

        $("#sobre").css("background-image", "url('images/wallpapers/yellow.png')");
        $("#subtitulo-sobre").css("color","#000000");
        $("#sobre").css("color","#553900");
        $("#instagram-sobre").attr("src","images/icons/instagram-brown.png");
        $("#facebook-sobre").attr("src","images/icons/facebook-brown.png");
        
        $(".subtitulo-contato").css("color","#808080");
        $("#contato").css("background-image", "url('images/wallpapers/contato-preto.png')");
        $("#contato").css("color","#F6AA01");
        $("#whatsapp-contato").attr("src","images/icons/whatsapp-amarelo.png");
        $("#email-contato").attr("src","images/icons/email-contato.png");
        $("#telefone-contato").attr("src","images/icons/telefone-contato.png");
        $("#instagram-contato").attr("src","images/icons/instagram-amarelo.png");

        $("#calculadora").css("background-image","url('images/wallpapers/yellow.png')");
        $("#calcular").css("background-color","#b40404");

        $("#resultado").css("border","2px solid #F6AA01");
        $("#resultado").css("background-color","rgba(246, 170, 1, 0.1)");
        $("#resultado h3").css("color","#F6AA01");
        $("#resultado p").css("color","#F6AA01");
        $("#calculadora-chopp").css("background-color","#000000");
        $("#calculadora-chopp").css("box-shadow","0 20px 40px rgba(0, 0, 0, 0.473)");
        $("#calculadora-chopp h2").css("color","#F6AA01");
        $("#calculadora-chopp h4").css("color","#F6AA01");
        $("#calculadora-chopp label").css("color","#F6AA01");
        $("#calcular").hover(
            function() { $(this).css("background-color", "#880404"); },
            function() { $(this).css("background-color", "#b40404"); }
        );

        $("footer").css("background-color","#000000");
        $("footer").css("color","#333");
        $(".footer-bottom").css("color","#bdbdbd");
        $(".footer-divider").css("border-top","1px solid #ddd");
        $(".logo-footer").attr("src","images/logos/logo-yellow.png");
        $(".desenvolvedor").css("color","#dfdfdf");
        $("#wpp-footer").attr("src","images/icons/whatsapp-amarelo.png");
        $("#insta-footer").attr("src","images/icons/instagram-amarelo.png");
        $("#face-footer").attr("src","images/icons/facebook-amarelo.png");
        $("#logo-melo").attr("src","images/logos/logo-melo-amarela.png");
        
        }
    });
});

function waitForElement(selector, callback) {
    const checkExist = setInterval(function() {
        if ($(selector).length) {
            clearInterval(checkExist);
            callback();
        }
    }, 100);
}

// Event listeners para redes sociais e contatos
$(".instagram").on("click", function () {
    window.open("https://www.instagram.com/chopparaucaria", "_blank");
});

$(".facebook").on("click", function () {
    window.open("https://www.facebook.com/chopparaucaria", "_blank");
});

$(".whatsapp").on("click", function(){
    window.open("https://wa.me/554198010067", "_blank");
});

$(".email").on("click", function(){
    window.open("mailto:chopparaucaria@gmail.com?subject=Assunto do e-mail&body=Texto do corpo do e-mail", "_blank");
});

$(".telefone").on("click", function(){
    window.open("tel:+554198010067", "_blank");
});

$(".desenvolvedor").on("click", function(){
    window.open("https://linktr.ee/edufmelo", "_blank");
});

// Função para alternar palavras
const palavras = ["EVENTO", "HAPPYHOUR", "RESTAURANTE","BAR","CASAMENTO"];
const $elemento = $(".alternando-palavras");
let palavraIndex = 0;

function alternarPalavras() {
    $elemento.text(palavras[palavraIndex]);
    palavraIndex = (palavraIndex + 1) % palavras.length;
}
setInterval(alternarPalavras, 1500);

// Scroll suave para seções
function scrollToSection(event, id) {
    event.preventDefault();
    const $section = $(`#${id}`);

    if ($section.length) {
        $('html, body').animate({
            scrollTop: $section.offset().top - 80 // você pode ajustar esse valor se tiver um header fixo
        }, 800, 'swing'); // duração e tipo de easing
    }
}

function abrirModal(modalId) {
    $(`#${modalId}`).css('display', 'flex');
    $('.nossos-produtos').addClass('blurred');
    $('.carrossel').addClass('blurred');
    $('.carrossel-controls').addClass('blurred');
    $('body').css('overflow', 'hidden');
}

function fecharModal(modalId) {
    $(`#${modalId}`).css('display', 'none');
    $('.nossos-produtos').removeClass('blurred');
    $('.carrossel').removeClass('blurred');
    $('.carrossel-controls').removeClass('blurred');
    $('body').css('overflow', '');
}

// Fechar modal clicando fora
$(document).on('click', function (event) {
    $('.janela-modal').each(function () {
        if (event.target === this) {
            $(this).css('display', 'none');
            $('.nossos-produtos').removeClass('blurred');
            $('.carrossel').removeClass('blurred');
            $('.carrossel-controls').removeClass('blurred');
            $('body').css('overflow', '');
        }
    });
});

// Fechar modal com ESC
$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.janela-modal').css('display', 'none');
        $('.nossos-produtos').removeClass('blurred');
        $('.carrossel').removeClass('blurred');
        $('.carrossel-controls').removeClass('blurred');
        $('body').css('overflow', '');
    }
});

// Calculadora de chopp
$('#calcular').on('click', function () {
    const numPessoas = parseInt($('#num-pessoas').val()) || 0;
    const duracaoEvento = parseInt($('#duracao-evento').val()) || 0;

    if (numPessoas <= 0 || duracaoEvento <= 0) {
        alert('Por favor, insira valores válidos para número de pessoas e duração do evento.');
        return;
    }

    const litros = numPessoas * duracaoEvento * 0.5;
    $('#quantidade-litros').text(litros.toFixed(1));

    $('#resultado').fadeOut(200, function () {
        $(this).fadeIn(200);
        $('#div-btn-wpp').slideDown(); // Mostra o botão com uma animação suave

    });
});

// NOVO: Evento de clique para o botão de orçamento do WhatsApp
$('#btn-orcamento-whats').on('click', function() {
    // Pega a quantidade de litros calculada
    const quantidadeLitros = $('#quantidade-litros').text();
    
    // Monta a mensagem
    const mensagem = `Olá! Fiz um cálculo no site e gostaria de um orçamento para ${quantidadeLitros} litros de chopp.`;
    
    // Codifica a mensagem para ser usada em uma URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Define o número de telefone (o mesmo usado no restante do site)
    const numeroWhatsapp = '554198010067';
    
    // Cria o link completo da API do WhatsApp
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;
    
    // Abre o link em uma nova aba
    window.open(urlWhatsapp, '_blank');
});

// Menu mobile
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', function() {
    menu.classList.add('abrir-menu');
});

menu.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

overlay.addEventListener('click', function() {
    menu.classList.remove('abrir-menu');
});

// Fechar menu mobile ao clicar em link
$('#itens-menu-mobile a').on('click', function(e) {
    menu.classList.remove('abrir-menu');
});

// Animação suave para elementos ao scroll
$(window).on('scroll', function() {
    $('.texto-container').each(function() {
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();
        
        if (elementBottom > viewportTop && elementTop < viewportBottom) {
            $(this).addClass('visible');
        }
    });
});