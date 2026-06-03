const container = document.getElementById("container");
let nextId = 1;

function createCard(item, id) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = id;
    card.innerHTML = `
        <h3>${item.titulo}</h3>
        <p>${item.descricao}</p>
    `;
    return card;
}

function renderCards(items) {
    items.forEach(item => {
        const card = createCard(item, nextId);
        container.appendChild(card);
        nextId += 1;
    });
}

fetch("dados.json")
    .then(res => res.json())
    .then(dados => {
        renderCards(dados);
    })
    .catch(error => {
        console.error("Erro ao carregar dados.json:", error);
    });
