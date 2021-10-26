function getArticleGenerator(articles) {
    // TODO: redesign
    let container = $('div#content');

    return function () {
        if (articles.length > 0) {
            container.append($('<article>')
                .text(articles.shift()));
        }
    }
}