const slides = [
    { img: "https://picsum.photos/id/101/800/600", text: "Pirma nuotrauka" },
    { img: "https://picsum.photos/id/102/800/600", text: "Antra nuotrauka" },
    { img: "https://picsum.photos/id/103/800/600", text: "Trečia nuotrauka" },
    { img: "https://picsum.photos/id/104/800/600", text: "Ketvirta nuotrauka" },
    { img: "https://picsum.photos/id/111/800/600", text: "Penkta nuotrauka" },
    { img: "https://picsum.photos/id/106/800/600", text: "Šešta nuotrauka" },
    { img: "https://picsum.photos/id/107/800/600", text: "Septinta nuotrauka" },
    { img: "https://picsum.photos/id/108/800/600", text: "Aštunta nuotrauka" },
    { img: "https://picsum.photos/id/109/800/600", text: "Devinta nuotrauka" },
    { img: "https://picsum.photos/id/110/800/600", text: "Dešimta nuotrauka" }
];

let index = 0;
let paused = false;
let timer;

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const img = document.getElementById("slideImage");
const text = document.getElementById("slideText");
const thumbs = document.getElementById("thumbs");
const pauseBtn = document.getElementById("pause");

slides.forEach((s, i) => {
    const im = document.createElement("img");
    im.src = s.img;
    im.dataset.index = i;
    im.onclick = () => openModal(i);
    gallery.appendChild(im);
});

slides.forEach((_, i) => {
    const t = document.createElement("div");
    t.className = "thumb";
    t.innerText = `${i + 1}`;
    t.onclick = () => goTo(i);
    thumbs.appendChild(t);
});

function update() {
    img.src = slides[index].img;
    text.innerText = slides[index].text;
    document.querySelectorAll(".thumb").forEach((t, i) => {
        t.classList.toggle("active", i === index);
    });
    document.querySelectorAll(".thumb")[index]
        .scrollIntoView({ behavior: "smooth", inline: "center" });
}

function next() { index = (index + 1) % slides.length; update(); }
function prev() { index = (index - 1 + slides.length) % slides.length; update(); }

function start() { timer = setInterval(next, 3000); }
function stop() { clearInterval(timer); }

function restart() {
    stop();
    if (!paused) start();
}

function goTo(i) {
    index = i;
    update();
    restart();
}

function openModal(i) {
    index = i;
    paused = false;
    pauseBtn.innerHTML = "II";
    update();
    modal.style.display = "flex";
    restart();
}

document.getElementById("next").onclick = () => { next(); restart(); };
document.getElementById("prev").onclick = () => { prev(); restart(); };

pauseBtn.onclick = () => {
    paused = !paused;
    if (paused) { stop(); pauseBtn.innerHTML = "▶"; }
    else { start(); pauseBtn.innerHTML = "II"; }
};

closeBtn.onclick = () => { modal.style.display = "none"; stop(); };

document.addEventListener("keydown", e => {
    if (e.key === "Escape") { modal.style.display = "none"; stop(); }
});