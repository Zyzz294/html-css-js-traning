const images = document.getElementById('images');
const img = document.querySelectorAll('#images img');

let index = 0;

function run() {
    index++;

    if (index > img.length - 1) {
        index = 0;
    }

    images.style.transform = `translateY(${-index * 500}px)`;

    setTimeout(run, 2000)
}


setInterval(run, 2000);