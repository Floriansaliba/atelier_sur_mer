// Apparition / Disparition des pastilles

const projets = document.getElementsByClassName("project");
const pastilles = document.getElementsByClassName("project__pastille");

for (let i = 0; i < projets.length; i++) {
  projets[i].addEventListener("mouseover", () => {
    pastilles[i].style.display = "flex";
  });
}

for (let i = 0; i < projets.length; i++) {
  projets[i].addEventListener("mouseout", () => {
    pastilles[i].style.display = "none";
  });
}
