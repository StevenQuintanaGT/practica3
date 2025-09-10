
document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const abrirPestana = document.getElementById('abrirPestana');
    const contenidoPestana = document.getElementById('contenidoPestana');
    let pestanaAbierta = false;
    abrirPestana.addEventListener('click', function() {
        pestanaAbierta = !pestanaAbierta;
        contenidoPestana.style.display = pestanaAbierta ? 'block' : 'none';
    });

    document.addEventListener('click', function(e) {
        if (!document.getElementById('pestanaHorarios').contains(e.target) && pestanaAbierta) {
            contenidoPestana.style.display = 'none';
            pestanaAbierta = false;
        }
    });
});
