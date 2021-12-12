const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

let browser, page;

let clientUrl = 'http://127.0.0.1:5500/JSApplications/05-ArchitectureAndTestingExercise/01.Messenger'

function fakeResponse(data){
    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };
}

let messages = {
    1: {
        author: 'Pesho',
        content: 'My message'
    },
    2: {
        author: 'Gero',
        content: 'My second message'
    },
}

describe('E2E tests', function() {
    before(async () => {
        browser = await chromium.launch({headless: false, slowMo: 1000}); 
    });
    after(async () => { await browser.close(); });
    beforeEach(async () => { page = await browser.newPage(); });
    this.afterEach(async () => { await page.close(); });

    describe('load messages', () => {
        it('should call server', async () => {
            await page.route('**/jsonstore/messenger', route => route.fulfill(fakeResponse(messages)));

            await page.click('#refresh');
            
            await page.goto(clientUrl);

            const [response] = await Promise.all([
                page.waitForResponse('**/jsonstore/messenger'),
                page.click('#refresh'),
            ]);
        });
    })
});