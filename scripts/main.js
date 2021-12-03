// Ouverture et fermeture paragraphe de présentation

const textFooter = document.getElementsByClassName("underlined-text")[0];
const introductionArticle = document.getElementsByClassName(
  "article-introduction"
)[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];

textFooter.addEventListener("click", () => {
  introductionArticle.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  introductionArticle.style.display = "none";
});
