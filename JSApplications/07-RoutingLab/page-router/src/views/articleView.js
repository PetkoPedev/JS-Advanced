import articlesData from "../articlesData.js";

const articleTemplate = (data) => `
    <article>
        <header>
            <h1>${data.title}</h1>
        </header>

        <main>
            <p>${data.content}</p>
        </main>
        <footer>
            <p>Created by: ${data.author || 'John Doe'}</p>
        </footer>
    </article>
`;

export default function (context) {
    let rootElement = document.querySelector('.root');
    let currentArticle = articlesData.find(x => x.id === context.params.id);

    rootElement.innerHTML = articleTemplate(currentArticle);
}