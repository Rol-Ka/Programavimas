import axios from 'axios';


/*

Prekes pavadinimas;
Kaina;
Kiekis sandelyje:
Trumpas aprasymas;
--nuotrauka
*/

const serverUrl = 'http://localhost:80/item'

const initApp = _ => {
    console.log('App started');
    initCreateForm();
}


const initCreateForm = _ => {
    const form = document.querySelector('[data-create-form]');
    const createBtn = form.querySelector('[data-create-btn]');

    createBtn.addEventListener('click', _ => {
        const allInputs = form.querySelectorAll('[name]');
        const itemData = {};

        allInputs.forEach(input => {
            const name = input.getAttribute('name');
            const value = input.value;
            itemData[name] = value;
        });

        axios.post(serverUrl, itemData)
            .then(res => {
                console.log('Prekė sukurta sėkmingai:', res.data);
                // Išvalom formą
                form.reset();
            })
            .catch(err => {
                console.error('Klaida kuriant prekę:', err);
            });
    });
}



initApp();