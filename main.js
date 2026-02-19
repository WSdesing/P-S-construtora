
function toggleTheme() {
    const body = document.body;
    const isChecked = document.getElementById('slider').checked;
    
    if (isChecked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}


window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.getElementById('slider').checked = true;
        document.body.classList.add('dark-theme');
    }
};


document.addEventListener('DOMContentLoaded', function() {
    const menuOpen = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.menu-close');
    const navMenu = document.querySelector('.main-menu-wrap');

    if (menuOpen) {
        menuOpen.addEventListener('click', () => {
            navMenu.classList.add('open');
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', () => {
            navMenu.classList.remove('open');
        });
    }
});


function subfv() {
    
    const form = document.getElementById("vatapa");
    if(form.checkValidity()) {
        form.submit();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
        grecaptcha.reset();
    }
}

function subf() {
   
    const form = document.getElementById("contactForm");
    if(form.checkValidity()) {
        form.submit();
    } else {
        alert("Por favor, preencha todos os campos.");
        grecaptcha.reset();
    }
}
const galeriaContainer = document.getElementById('grade-fotos');


const fotosNaPasta = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
    "15.jpeg",
    "16.jpeg",
    "17.jpeg",
    "18.jpeg",
    "19.jpeg",
    
];

let htmlFotos = '';

fotosNaPasta.forEach((nomeArquivo) => {
    htmlFotos += `
    <div class="col-xl-4 col-lg-6 col-md-6 mb-4" data-aos="fade-up">
        <div class="currency-flag">
            <a href="${nomeArquivo}" data-fancybox="gallery" data-caption="Trabalho Pereira & Santos">
                <img src="${nomeArquivo}" alt="Projeto da Construtora" loading="lazy">
            </a>
        </div>
    </div>`;
});


galeriaContainer.innerHTML = htmlFotos;


Fancybox.bind("[data-fancybox='gallery']", {});