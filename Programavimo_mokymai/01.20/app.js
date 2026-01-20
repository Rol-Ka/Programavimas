
const slides = [
    { img: "https://picsum.photos/id/101/800/600", text: "Pirma nuotrauka" },
    { img: "https://picsum.photos/id/102/800/600", text: "Antra nuotrauka" },
    { img: "https://picsum.photos/id/103/800/600", text: "Trečia nuotrauka" },
    { img: "https://picsum.photos/id/104/800/600", text: "Ketvirta nuotrauka" },
    { img: "https://picsum.photos/id/105/800/600", text: "Penkta nuotrauka" },
    { img: "https://picsum.photos/id/106/800/600", text: "Šešta nuotrauka" },
    { img: "https://picsum.photos/id/107/800/600", text: "Septinta nuotrauka" },
    { img: "https://picsum.photos/id/108/800/600", text: "Aštunta nuotrauka" },
    { img: "https://picsum.photos/id/109/800/600", text: "Devinta nuotrauka" },
    { img: "https://picsum.photos/id/110/800/600", text: "Dešimta nuotrauka" }
];

let index = 0;
let paused = false;
let timer;

const img = document.getElementById("slideImage");
const text = document.getElementById("slideText");
const thumbs = document.getElementById("thumbs");

/* INIT */
slides.forEach((_, i) => {
    const t = document.createElement("div");
    t.className = "thumb";
    t.innerText = `{${i + 1}}`;
    t.onclick = () => goTo(i);
    thumbs.appendChild(t);
});

function update() {
    img.src = slides[index].img;
    text.innerText = slides[index].text;

    const thumbsEls = document.querySelectorAll(".thumb");
    thumbsEls.forEach((t, i) => {
        t.classList.toggle("active", i === index);
    });

    // automatiškai prasukti thumbnails
    thumbsEls[index].scrollIntoView({
        behavior: "smooth",
        inline: "center"
    });
}

function next() {
    index = (index + 1) % slides.length;
    update();
}

function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
}

function goTo(i) {
    index = i;
    update();
    restart();
}

function start() {
    timer = setInterval(next, 3000);
}

function stop() {
    clearInterval(timer);
}

function restart() {
    stop();
    if (!paused) start();
}

/* EVENTS */
document.getElementById("next").onclick = () => { next(); restart(); }
document.getElementById("prev").onclick = () => { prev(); restart(); }

const pauseBtn = document.getElementById("pause");

pauseBtn.onclick = () => {
    paused = !paused;

    if (paused) {
        stop();
        pauseBtn.innerHTML = "▶";   // PLAY ikona
    } else {
        start();
        pauseBtn.innerHTML = "II";  // PAUSE ikona
    }
};

update();
start();

