let contador = 1;

// (questão 1)
document.getElementById("addBtn").addEventListener("click", () => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", contador);

    card.innerHTML = `
        <h3>Card ${contador}</h3>
        <p>card gerado</p>
    `;

    document.getElementById("container").appendChild(card);

    contador++;
});
