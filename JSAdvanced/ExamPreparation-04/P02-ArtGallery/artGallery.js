class ArtGallery {


    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            'picture': 200,
            'photo': 50,
            'item': 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }
    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase()
        quantity = Number(quantity);

        if (!this.possibleArticles[articleModel]) {
            throw new Error('This article model is not included in this gallery!');
        } else {
            let isFound = false;
            this.listOfArticles.forEach(article => {
                if (article.articleName == articleName && article.articleModel == articleModel) {
                    article.quantity += quantity;
                    isFound = true;
                };
            });
            if (!isFound) {
                let newArticle = {
                    articleModel,
                    articleName,
                    quantity,
                }
                this.listOfArticles.push(newArticle);
            };
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`

        }

    }

    inviteGuest(guestName, personality) {
        const person = {
            'Vip': 500,
            'Middle': 250
        };
        let points = 0;
        if (person[personality]) {
            points = person[personality];

        } else {
            points = 50
        }

        this.guests.forEach((guest) => {
            if (guest.guestName == guestName) {
                throw new Error(`${guestName} has already been invited.`);
            };
        })
        let newGuest = {
            guestName,
            points,
            purchaseArticle: 0
        };
        this.guests.push(newGuest);
        return `You have successfully invited ${guestName}!`;
    };

    buyArticle(articleModel, articleName, guestName) {
        let searchedName = false;
        let searchedArticle;
        let searchedGuest = false;
        let sGuest;

        this.listOfArticles.forEach((article) => {
            if (article.articleName == articleName) {
                searchedName = true;
                searchedArticle = article;
                
            }
        })
        this.guests.forEach((guest) => {
            if (guest.guestName == guestName) {
                searchedGuest = true;
                sGuest = guest;
            }
        })
        if (!searchedName || searchedArticle.articleModel != articleModel.toLowerCase()) {
            throw new Error(`This article is not found.`);

        } else if (searchedName && searchedArticle) {
            if (searchedArticle.quantity == 0) {
                return `The ${articleName} is not available.`;
            }
            if (!searchedGuest) {
                return `This guest is not invited.`;
            };

        }
        if (sGuest.points < this.possibleArticles[articleModel.toLowerCase()]) {
            return `You need to have more points to purshase the article.`
        } else {
            let articlePOint = this.possibleArticles[articleModel.toLowerCase()]
            sGuest.points -= articlePOint;
            searchedArticle.quantity -= 1;
            sGuest.purchaseArticle++;
            return `${guestName} successfully purchased the article worth ${articlePOint} points.`;
        }
    }
    showGalleryInfo(criteria) {
        let result = [];
        switch (criteria) {
            case 'article':
                result.push(`Articles information:`);
                this.listOfArticles.forEach((article) => {
                    let a = `${article.articleModel} - ${article.articleName} - ${article.quantity}`;
                    result.push(a);
                });
                break;

            case 'guest':
                result.push('Guests information:');
                this.guests.forEach((guest) => {
                    let a = `${guest.guestName} - ${guest.purchaseArticle}`;
                    result.push(a);
                })
                break;
        };
        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
