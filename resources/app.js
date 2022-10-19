import Alpine from 'alpinejs'

window.Alpine = Alpine
 
Alpine.start()

import GLightbox from 'glightbox'

document.addEventListener("DOMContentLoaded", function () {

    let gallery = document.querySelector(".glightbox");

    if (gallery != null) {
        const lightbox = GLightbox({
            loop: true
        });
    }
});