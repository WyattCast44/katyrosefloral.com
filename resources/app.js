import Alpine from 'alpinejs'
import GLightbox from 'glightbox'

window.Alpine = Alpine
 
Alpine.start()

window.GLightbox = GLightbox;

document.addEventListener("DOMContentLoaded", function () {

    let gallery = document.querySelector(".glightbox");

    if (gallery != null) {
        const lightbox = GLightbox({
            loop: true
        });
    }
    
});