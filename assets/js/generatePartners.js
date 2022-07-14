const partners = [
    { name: "Maislaser", url:"maislaser" },
    { name: "Dell", url:"dell" },
    { name: "Oriental", url:"oriental" },
    { name: "WPS", url:"wps" },
    { name: "Pizaa Hut", url:"pizzahut" },
    { name: "Parceiros do Turismo", url:"parceirosturismo" },
    { name: "Ponto", url:"ponto" },
    { name: "Evino", url:"evino" },
    { name: "Frango!", url:"frango" },
    { name: "Amazon", url:"amazon" },
    { name: "Alura", url:"alura" },
    { name: "codeBuddy", url:"codebuddy" },
    { name: "Cedipo", url:"cedipo" },
    { name: "Gocase", url:"gocase" },
    { name: "Aqua Fisio Fitness", url:"aquafisio" },
];

const containerPartners = document.getElementById("partners");

function generatePartners(array, target) {
    array.map(({name, url}) => {
        let partner = document.createElement('img')
        partner.src = `./assets/img/club/${url}.webp`;
        partner.alt = name;
        target.appendChild(partner);
    });
}

generatePartners(partners, containerPartners);