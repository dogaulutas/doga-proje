const articles = document.querySelectorAll(".articles__article");
const articleNodes = document.querySelectorAll(".article-modal");
const articleNodesContainer = document.querySelector(".articles-modals");

/* close articles */
for (i = 0; i < articles.length; i++) {
    articles[i].classList.remove("aa_open");
}

/* close article nodes */
for (i = 0; i < articleNodes.length; i++) {
    articleNodes[i].classList.remove("am-open");
}

/* hide modals container */
function hideArticleNodesContainer() {
    articleNodesContainer.classList.add("hideContainer");
}

/* show modals container */
function showArticleNodesContainer() {
    articleNodesContainer.classList.remove("hideContainer");
}

function openArticle(articles, articleNodes, number) {
    showArticleNodesContainer();
    for (i = 0; i < articles.length; i++) {
        articles[i].classList.remove("aa_open");
    }
    articles[number].classList.add("aa_open");

    for (i = 0; i < articleNodes.length; i++) {
        articleNodes[i].classList.remove("am-open");
    }
    articleNodes[number].classList.add("am-open");
}

function closeArticle(articles, articleNodes, number) {
    hideArticleNodesContainer();
    for (i = 0; i < articles.length; i++) {
        articles[i].classList.remove("aa_open");
    }
    for (i = 0; i < articleNodes.length; i++) {
        articleNodes[i].classList.remove("am-open");
    }
}

hideArticleNodesContainer();

/*
openArticle(articles, articleNodes, 0);
closeArticle(articles, articleNodes, 0);
*/


const closeButtons = document.querySelectorAll(".am-close");

for (let index = 0; index < closeButtons.length; index++) {
    closeButtons[index].addEventListener("click", () => {
        closeArticle(articles, articleNodes, index);
    });

}