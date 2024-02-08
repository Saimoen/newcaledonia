window.addEventListener('scroll', function() {
    var navbar = document.getElementById('myNavbar');
    
    // Vérifiez si la position de défilement est supérieure ou égale à 500 pixels
    if (window.scrollY >= 500) {
        // Si oui, ajoutez une classe à la navbar
        navbar.classList.add('scrolled'); // Remplacez 'scrolled' par la classe que vous souhaitez ajouter
    } else {
        // Sinon, supprimez la classe de la navbar
        navbar.classList.remove('scrolled'); // Remplacez 'scrolled' par la classe que vous souhaitez supprimer
    }
});