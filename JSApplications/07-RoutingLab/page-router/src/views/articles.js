import articlesData from "../articlesData.js";

const articlesTemplate = (data) => /*javascript*/ `
<article>
    <h3>${data.title}</h3>
    <p>${data.content}</p>
    <footer>Footer here</footer>
    <a href="/articles/${data.id}">Read more</a>
</article>
`;

export default function (context) {
    let rootElement = document.querySelector('.root');

    let articlesHtml = articlesData.map(x => articlesTemplate(x)).join('<hr>');

    rootElement.innerHTML = articlesHtml;
}