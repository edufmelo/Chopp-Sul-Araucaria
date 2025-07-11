$(document).ready(function(){
    alternarPalavras();
    initCarousel();
    waitForElement('.nossos-produtos', function() {
        $('.nossos-produtos').css('display', 'block');
    });
    waitForElement('.Btn-whats', function() {
        $('.Btn-whats').css('display', 'flex');
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

// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona os elementos do carrossel
    const carouselWrapper = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.bloco');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');

    // Verifica se os elementos do carrossel existem na página
    if (!carouselWrapper || slides.length === 0) {
        console.error('Elementos do carrossel não encontrados');
        return;
    }

    let currentIndex = 1; // Começa com o segundo item como central (índice 1)

    // Função principal que atualiza a aparência e posição do carrossel
    function updateCarousel() {
        // Remove todas as classes de estado
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'side');
            
            // Adiciona a classe apropriada baseada na posição relativa ao item central
            if (index === currentIndex) {
                slide.classList.add('active'); // Item central
            } else if (index === currentIndex - 1 || index === currentIndex + 1) {
                slide.classList.add('side'); // Itens laterais
            }
        });

        // Calcula o deslocamento necessário para centralizar o slide ativo
        const slideWidth = slides[0].offsetWidth + 200; // Largura do slide + gap
        const containerWidth = carouselWrapper.parentElement.offsetWidth;
        const offset = (containerWidth / 2) - (slideWidth / 2) - (currentIndex * slideWidth);

        // Aplica a transformação para mover o carrossel
        carouselWrapper.style.transform = `translateX(${offset}px)`;

        // Atualiza o estado dos botões
        updateButtons();
    }

    // Função para atualizar o estado dos botões (ativar/desativar)
    function updateButtons() {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= slides.length - 1;
        
        // Aplica estilos visuais para botões desabilitados
        if (prevButton.disabled) {
            prevButton.style.opacity = '0.5';
            prevButton.style.cursor = 'not-allowed';
        } else {
            prevButton.style.opacity = '1';
            prevButton.style.cursor = 'pointer';
        }
        
        if (nextButton.disabled) {
            nextButton.style.opacity = '0.5';
            nextButton.style.cursor = 'not-allowed';
        } else {
            nextButton.style.opacity = '1';
            nextButton.style.cursor = 'pointer';
        }
    }

    // Evento de clique para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Evento de clique para o botão "Anterior"
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    // Adiciona evento de clique em cada slide para centralizá-lo
    slides.forEach((slide, index) => {
        slide.addEventListener('click', (e) => {
            // Se clicar na imagem, abrir modal
            if (e.target.classList.contains('galeria') || e.target.classList.contains('titulo-prod')) {
                const modalId = slide.getAttribute('data-modal');
                if (modalId) {
                    abrirModal(modalId);
                }
            } else {
                // Se clicar no slide, centralizar
                currentIndex = index;
                updateCarousel();
            }
        });
    });
});

$("#check-apple").on("click", function() {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const bgColor = $("header").css("background-color");

    if (bgColor === "rgb(0, 0, 0)") {
        // Tema claro
        $("header").css("background", "#F6AA01");
        $("#itens-menu a").css("color", "rgb(0, 0, 0)");
        $("#logo img").attr("src","images/logos/logo-black.png");
        
        $(".central h1").css("color","#F6AA01");
        $(".central p").css("color","#F6AA01");
        $(".Btn-whats").css("background-color","#F6AA01");
        $(".central").css("background-image", "url('images/wallpapers/blackbackground.png')");

        $("#produtos").css("background-image","url('images/wallpapers/yellow.png')");
        $(".nossos-produtos").css("color","#000000");
        $(".titulo-prod").css("color","#000000");

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
        
        // Atualizar cores do carrossel
        $(".carousel-btn").css({
            "background-color": "#000000",
            "color": "#F6AA01",
            "border": "2px solid #F6AA01"
        });
        $(".carousel-indicator").css("background-color", "#000000");
        $(".carousel-indicator.active").css("background-color", "#F6AA01");
        
        if (mediaQuery.matches) {
            $(".btn-abrir-menu i").css("color","black");
        }
    } else {
        // Tema escuro
        $("header").css("background", "#000000");
        $("#itens-menu a").css("color", "#F6BD32");
        $("#logo img").attr("src","images/logos/logo-yellow.png");

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
        $("#calculadora-chopp h2").css("color","#000000");
        $("#calculadora-chopp h4").css("color","#000000");
        $("#calculadora-chopp label").css("color","#000000");
        $("#calcular").css("background-color","#3d0303");

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
            scrollTop: $section.offset().top - 80
        }, 800, 'easeInOutQuad');
    }
}

// Funções dos modais
function abrirModal(modalId) {
    $(`#${modalId}`).css('display', 'flex');
    $('.nossos-produtos').addClass('blurred');
    $('.carousel').addClass('blurred');
    $('.carousel-controls').addClass('blurred');
    $('body').css('overflow', 'hidden');
}

function fecharModal(modalId) {
    $(`#${modalId}`).css('display', 'none');
    $('.nossos-produtos').removeClass('blurred');
    $('.carousel').removeClass('blurred');
    $('.carousel-controls').removeClass('blurred');
    $('body').css('overflow', 'auto');
}

// Fechar modal clicando fora
$(document).on('click', function (event) {
    $('.janela-modal').each(function () {
        if (event.target === this) {
            $(this).css('display', 'none');
            $('.nossos-produtos').removeClass('blurred');
            $('.carousel').removeClass('blurred');
            $('.carousel-controls').removeClass('blurred');
            $('body').css('overflow', 'auto');
        }
    });
});

// Fechar modal com ESC
$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.janela-modal').css('display', 'none');
        $('.nossos-produtos').removeClass('blurred');
        $('.carousel').removeClass('blurred');
        $('.carousel-controls').removeClass('blurred');
        $('body').css('overflow', 'auto');
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
    });
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