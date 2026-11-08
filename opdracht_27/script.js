const nummers = [
    { titel: "song1", artiest: "artist1", duur: 730 },
    { titel: "song2", artiest: "artist2", duur: 432 },
    { titel: "song3", artiest: "artist3", duur: 2231 },
    { titel: "song4", artiest: "artist4", duur: 0 },
    { titel: "song5", artiest: "artist5", duur: 231 }
];

const IT = document.getElementById("IT");

for (let i = 0; i < nummers.length; i++) {
    IT.innerHTML += `${nummers[i].titel} – ${nummers[i].artiest} (${nummers[i].duur} minuten)<br>`;
}