$(document).ready(function(){
    alternarPalavras();
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
    }, 100); // Verifica a cada 100ms
}

$("#check-apple").on("click", function() {

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    // Obter a cor de fundo do header
    const bgColor = $("header").css("background-color");

    // Verificar se a cor é preta
    if (bgColor === "rgb(0, 0, 0)") { // #F6AA01 inverso
        $("header").css("background", "#F6AA01");
        // Voltar a cor dos links do menu
        $("#itens-menu a").css("color", "rgb(0, 0, 0)");
        // Restaurar a cor (ou imagem) do elemento ambiente
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

        $("#facebook-sobre").attr("src","images/icons/facebook-amarelo.png");
        $("#contato").css("background-image", "url('images/wallpapers/contato-amarelo.png')");
        $("#contato").css("color","#553900");
        $("#whatsapp-contato").attr("src","images/icons/whatsapp-brown.png");
        $("#email-contato").attr("src","images/icons/email-brown.png");
        $("#telefone-contato").attr("src","images/icons/telefone-brown.png");
        $("#instagram-contato").attr("src","images/icons/instagram-brown.png");
        $(".subtitulo-contato").css("color","#000000");

        $("#calculadora").css("background-image","url('images/wallpapers/black.png')");
        $("#calculadora-chopp h2").css("color","#F6AA01");
        $("#calculadora-chopp h4").css("color","#F6AA01");
        $("#calculadora-chopp label").css("color","#F6AA01");
        $("#calcular").css("background-color","#8f0404");
        $("#calcular").mouseenter(function() {
            $(this).css("background-color", "#b40404");
        });
        $("#calcular").mouseleave(function() {
            $(this).css("background-color", "#8f0404"); 
        });

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
        // Voltar ao amarelo e estilos originais
        $("header").css("background", "#000000");

        // Alterar a cor dos links do menu
        $("#itens-menu a").css("color", "#F6BD32");

        // Alterar a cor (ou imagem) do elemento ambiente
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
        debugger;
        if (mediaQuery.matches) {
            $(".btn-abrir-menu i").css("color","#F6BD32");
        }
    }
});

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
    window.open("tel:+554198010067", "_blank"); // Número de telefone para ligar
});

$(".desenvolvedor").on("click", function(){
    window.open("https://linktr.ee/edufmelo", "_blank");
});

gsap.registerPlugin(ScrollTrigger);

// Scroll suave com Locomotive Scroll
const pageContainer = document.querySelector(".page-container");
const scroller = new LocomotiveScroll({
    el: pageContainer,
    smooth: true
});

scroller.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(pageContainer, {
        scrollTop(value) {
            return arguments.length
                ? scroller.scrollTo(value, 0, 0)
                : scroller.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: pageContainer.style.transform ? "transform" : "fixed"
    });

// Animação para as imagens da galeria
gsap.from(".texto-container", {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "back.out(1.7)",
    delay: 0.2,
    stagger: 0.3
});



    const pinWrap = document.querySelector(".pin-wrap");
    const pinWrapWidth = pinWrap.scrollWidth;
    const horizontalScrollLength = pinWrapWidth - window.innerWidth;
    
    gsap.to(".pin-wrap", {
        scrollTrigger: {
            scroller: pageContainer,
            scrub: true,
            trigger: "#produtos",
            pin: true,
            start: "top top",
            end: pinWrapWidth,
        },
        x: -horizontalScrollLength,
    });
    
    ScrollTrigger.addEventListener("refresh", () => scroller.update());
    ScrollTrigger.refresh();


// Função para alternar palavras
const palavras = ["EVENTO", "HAPPYHOUR", "RESTAURANTE","BAR","CASAMENTO"];
const $elemento = $(".alternando-palavras");
let palavraIndex = 0;

function alternarPalavras() {
    $elemento.text(palavras[palavraIndex]);
    palavraIndex = (palavraIndex + 1) % palavras.length;
}
setInterval(alternarPalavras, 1500);

function scrollToSection(event, id) {
    event.preventDefault(); // Impede o comportamento padrão de navegação
    const $section = $(`#${id}`)
    
    // Verifique se a rolagem horizontal precisa ser redefinida
    const offsetTop = $section.offset().top;
    
    // Realiza o scroll suave
    scroller.scrollTo(offsetTop, 0, 0);
};

function abrirModal(modalId) {
    $(`#${modalId}`).css('display', 'flex'); // Exibe o modal
    $('.nossos-produtos').addClass('blurred');
    $('.pin-wrap').addClass('blurred');
};

function fecharModal(modalId) {
    $(`#${modalId}`).css('display', 'none'); // Oculta o modal
    $('.nossos-produtos').removeClass('blurred');
    $('.pin-wrap').removeClass('blurred');
};

$(document).on('click', function (event) {
    $('.janela-modal').each(function () {
        if (event.target === this) {
            $(this).css('display', 'none'); // Oculta o modal clicado
            $('.nossos-produtos').removeClass('blurred');
            $('.pin-wrap').removeClass('blurred');
        }
    });
});

$('#calcular').on('click', function () {
    const numPessoas = parseInt($('#num-pessoas').val());
    const duracaoEvento = parseInt($('#duracao-evento').val());

    // Cálculo: 0.5L por pessoa por hora
    const litros = numPessoas * duracaoEvento * 0.5;

    // Atualizar o resultado com animação
    $('#quantidade-litros').text(litros.toFixed(1));

    // Exibir o resultado com animação de fade-in
    $('#resultado').fadeOut(200, function () {
        $(this).fadeIn(200);
    });
});

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
})


