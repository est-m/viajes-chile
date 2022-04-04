$(document).ready(function(){ 

    //Oculta la barra de navegación al hacer scroll
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("nav-bar").style.top = "0";
    } else {
        document.getElementById("nav-bar").style.top = "-40px";
        }
        prevScrollpos = currentScrollPos;
    }
    
    // Tooltips de la sección "DESTACADOS"    
    $(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    // Alerta al enviar el formulario"
    $("#btn-1").click(function(){
        alert("Gacias por preferirnos");
    });  
    
    // Agrega smooth scroll a los links de la barra de navegación
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            // Animación smooth scroll            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            // Tiempo de animación (en ms)    
            }, 500, function(){
                window.location.hash = hash;
            });
        }
    });
});