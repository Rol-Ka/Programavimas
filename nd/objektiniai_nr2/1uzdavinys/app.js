
//Sukurti klasę Marsas. Sukurti statinį metodą pridetiPalydovą(), 
// kuris sukuria naują Marsas objektą, turintį dvi savybes id: rand 100000 - 999999 
// ir pavadinimas: pagal taisyklę iškvietus pirmą kartą “Deimas”, antrą kartą “Fobas”.
//  Metodas grąžina Marsas objektą. Metodą iškvietus trečią, ketvirtą ir t.t. kartus,
//  metodas turi nekurti daugiau naujų Marsas objektų, o grąžinti atsitiktine tvarka,
//  vieną iš dviejų jau sukurtų Marsas objektų. Tarkim penkis kartus iškvietus metodą,
//  turime matyti tik du skirtingus objektus (žiūrim pagal id).

class Marsas {
    static palydovai = [];
    static pavadinimai = ['Deimas', 'Fobas'];

    constructor(id, pavadinimas) {
        this.id = id;
        this.pavadinimas = pavadinimas;
    }

    static pridetiPalydova() {
        if (this.palydovai.length < 2) {
            const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
            const pavadinimas = this.pavadinimai[this.palydovai.length];

            const naujas = new Marsas(id, pavadinimas);
            this.palydovai.push(naujas);

            return naujas;
        }

        const randomIndex = Math.floor(Math.random() * 2);
        return this.palydovai[randomIndex];
    }
}

const pirmas = Marsas.pridetiPalydova();
const antras = Marsas.pridetiPalydova();
const trecias = Marsas.pridetiPalydova();
const ketvirtas = Marsas.pridetiPalydova();
const penktas = Marsas.pridetiPalydova();
const sestas = Marsas.pridetiPalydova();
const septintas = Marsas.pridetiPalydova();

console.log(pirmas);
console.log(antras);
console.log(trecias);
console.log(ketvirtas);
console.log(penktas);
console.log(sestas);
console.log(septintas);



//2.//Sukurti klasę Puodelis. Puodelis turi dvi savybes: spalva ir ipilta. 
// Sukurti statinį metodą gamintiPuodelius(), kuris pagamina du objektus 
// su savybių reikšmėm: “raudonas”, “pilnas” ir “geltonas”, “tuščias”. 
// Sukurti statinį metodą perpilti(), kuris “pilną” puodelį padaro tuščią 
// ir atvirkščiai. Jeigu abu puodeliai tušti arba pilni - nieko nepadaro.
//  Sukurti statinį metodus ispiltiViska(), kuris abu puodelius padaro 
// “tuščius” ir ipiltiIAbu(), kuris abu puodelius padaro “pilnus”. 
// Po šių metodų iškvietimo, metodas perpilti() turi veikti korektiškai
//  ir logiškai (arba abu “tušti” arba abu “pilni”).



class Puodelis {
    static pilnas = 'pilnas';
    static tuscias = 'tuščias';

    constructor(spalva, ipilta) {
        this.spalva = spalva;
        this.ipilta = ipilta;
    }

    static gamintiPuodelius() {
        const p1 = new Puodelis('raudonas', Puodelis.pilnas);
        const p2 = new Puodelis('geltonas', Puodelis.tuscias);
        return [p1, p2];
    }

    static perpilti(p1, p2) {
        if (!p1 || !p2) return;

        if (p1.ipilta !== p2.ipilta) {
            p1.ipilta = p1.ipilta === Puodelis.pilnas ? Puodelis.tuscias : Puodelis.pilnas;
            p2.ipilta = p2.ipilta === Puodelis.pilnas ? Puodelis.tuscias : Puodelis.pilnas;
        }
    }

    static ispiltiViska(p1, p2) {
        if (!p1 || !p2) return;
        p1.ipilta = Puodelis.tuscias;
        p2.ipilta = Puodelis.tuscias;
    }

    static ipiltiIAbu(p1, p2) {
        if (!p1 || !p2) return;
        p1.ipilta = Puodelis.pilnas;
        p2.ipilta = Puodelis.pilnas;
    }
}

const [p1, p2] = Puodelis.gamintiPuodelius();
console.log(p1, p2);

Puodelis.perpilti(p1, p2);
console.log(p1, p2);

Puodelis.ispiltiViska(p1, p2);
console.log(p1, p2);

Puodelis.ipiltiIAbu(p1, p2);
console.log(p1, p2);

//3.Sukurti klasę Taskas, kuris turi savybę taskas rand 100-999. 
// Sukurti klasę Taskai, kuris turi savybe taskai, kuri yra masyvas iš 10 Taskas objektų.
//  Sukurkite išorinį kintamąjį (nepriklausantį jokiai klasei) daugTasku, kuris yra masyvas 
// iš 10 elementų, o kiekvienas elementas yra Taskai objektas. Išrūšiuokite masyvą daugTasku, 
// pagal taskų sumą nuo didžiausio iki mažiausio.

class Taskas {
    constructor() {
        this.taskas = Math.floor(Math.random() * 900) + 100;
    }
}

class Taskai {
    constructor() {
        this.taskai = [];
        for (let i = 0; i < 10; i++) {
            this.taskai.push(new Taskas());
        }
    }

    suma() {
        return this.taskai.reduce((sum, t) => sum + t.taskas, 0);
    }
}

let daugTasku = [];

for (let i = 0; i < 10; i++) {
    daugTasku.push(new Taskai());
}

daugTasku.sort((a, b) => b.suma() - a.suma());

daugTasku.forEach((t, i) => {
    console.log(`Taskai #${i + 1}, suma = ${t.suma()}`);
});

//4. Sukurti klasę Div. Sukūrus naują objektą iš šios klasės HTML’e 
// turi atsirasti naujas <div> tagas su rand 1000 - 9999 skaičiumi viduje. 
// Sukurti metodą spalva(color), kuris keistų to <div> tago spalvą. 
// Taip pat statinį metodą visuSpalva(color), kuris keistų visų <div> tagų,
//  sukurtų per klasę, spalvą.


class Div {

    static visiDivai = [];

    constructor() {
        this.div = document.createElement('div');
        this.div.textContent = Math.floor(Math.random() * 9000) + 1000;
        this.div.style.margin = '5px';
        this.div.style.fontSize = '20px';

        document.body.appendChild(this.div);

        Div.visiDivai.push(this.div);
    }

    spalva(color) {
        this.div.style.color = color;
    }

    static visuSpalva(color) {
        Div.visiDivai.forEach(div => {
            div.style.color = color;
        });
    }
}

const a = new Div();
const b = new Div();
const c = new Div();

Div.visuSpalva('blue');
b.spalva('red');



//5

class Post {
    constructor(id) {
        if (id < 1 || id > 100) {
            throw new Error('ID turi būti nuo 1 iki 100');
        }

        this.id = id;
    }

    async load() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();


        this.userId = data.userId;
        this.title = data.title;
        this.body = data.body;

        return this;
    }
}

(async () => {
    const post = new Post(13);
    await post.load();

    console.log(post);
})();

//6 Sukurti klasę Ratai. Klasė turi dvi savybes: kiekis ir dydis. 
// Abi savybės įrašomos objelto kūrimo metu. Sukurti klasę Dviratis ir klasę Automobilis.
//  Abi šios klasės turi turėti savybę gamintojas, kuri įrašoma objekto kūrimo metu 
// ir paveldėti klasę Ratai. Sukurti objektus iš klasių Dviratis ir Automobilis kūrimo 
// metu nurodant gamintoją ir ratų dydį, o tuo tarpu ratų skaičius turi būti priskirtas 
// automatiškai priklausomai nuo to, kiek ratų turi transporto priemonė.

class Ratai {
    constructor(kiekis, dydis) {
        this.kiekis = kiekis;
        this.dydis = dydis;
    }
}

class Dviratis extends Ratai {
    constructor(gamintojas, dydis) {
        super(2, dydis); // 
        this.gamintojas = gamintojas;
    }
}

class Automobilis extends Ratai {
    constructor(gamintojas, dydis) {
        super(4, dydis);
        this.gamintojas = gamintojas;
    }
}

const dviratis = new Dviratis('bmx', 28);
const automobilis = new Automobilis('Audi', 17);

console.log(dviratis);
console.log(automobilis);

//7 Sukurti klasę Paukstis, kuris turi tris metodus bega(), plaukia(), skrenda().
//  Iškvietus atitinkamą metodą, konsolėje turi būti atspausdintas atitinkamas
// pranešimas pvz.: “Šitas paukštis skrenda”, kai iškviečiamas metodas skrenda().
// Sukurti tris klases Antis, Pingvinas ir Strutis, kurios paveldėja klasę Paukštis.
// Kiekvienoje klasėje perrašyti nekorektiškus metodus pvz.: “Šitas paukštis NEskrenda”,
//  kai iškviečiamas metodas skrenda() objekte pagamintame iš klasės Strutis.