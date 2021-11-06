// Select game screens
const gameStart = document.querySelector('.game-start');
const gameArea = document.querySelector('.game-area');
const gameOver = document.querySelector('.game-over');
const gameScore = document.querySelector('.game-score');
const gamePoints = document.querySelector('.points')

// Game start listener
gameStart.addEventListener('click', onGameStart);

function onGameStart() {
    gameStart.classList.add('hide');

    const wizard = document.createElement('div');
    wizard.classList.add('wizard');
    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';
    gameArea.appendChild(wizard);

    player.width = wizard.offsetWidth;
    player.height = wizard.offsetHeight;

    window.requestAnimationFrame(gameAction);
}


//global key listeners
document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

let keys = {};

let player = {
    x: 150,
    y: 100,
    width: 0,
    height: 0,
    lastTimeFiredFireball: 0
};
let game = {
    speed: 2,
    movingMultiplier: 4,
    fireballMultiplier: 5,
    fireInterval: 1000,
    cloudSpawnInterval: 3000,
    bugSpawnInterval: 1000,
    bugKillBonus: 2000
};

let scene = {
    score: 0,
    lastCloudSpawn: 0,
    lastBugSpawn: 0,
    isActiveGame: true
}

function onKeyDown(e) {
    keys[e.code] = true;
    console.log(keys);
}

function onKeyUp(e) {
    keys[e.code] = false;
    console.log(keys);
}

function gameAction(timeStamp) {
    const wizard = document.querySelector('.wizard');

    let fireballs = document.querySelectorAll('.fire-ball');
    fireballs.forEach(fireball => {
        fireball.x += game.speed * game.fireballMultiplier;
        fireball.style.left = fireball.x + 'px';

        if (fireball.x + fireball.offsetWidth > gameArea.offsetWidth) {
            fireball.parentElement.removeChild(fireball);
        }
    })

    //Apply gravitation
    let isInAir = (player.y + player.height) <= gameArea.offsetHeight;
    if (isInAir) {
        player.y += game.speed;
    }

    if (keys.ArrowUp && player.y > 0) {
        player.y -= game.speed * game.movingMultiplier;
    }

    if (keys.ArrowDown && isInAir) {
        player.y += game.speed * game.movingMultiplier;
    }

    if (keys.ArrowLeft && player.x > 0) {
        player.x -= game.speed * game.movingMultiplier;
    }

    if (keys.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
        player.x += game.speed * game.movingMultiplier;
    }

    if (keys.Space && timeStamp - player.lastTimeFiredFireball > game.fireInterval) {
        wizard.classList.add('wizard-fire');
        addFireball(player);
        player.lastTimeFiredFireball = timeStamp;

        isCollision(wizard, wizard);
    } else {
        wizard.classList.remove('wizard-fire');
    }

    wizard.style.top = player.y + 'px';
    wizard.style.left = player.x + 'px';

    //Increment score count
    scene.score++;

    // Add clouds
    if (timeStamp - scene.lastCloudSpawn > game.cloudSpawnInterval + 20000 * Math.random()) {
        let cloud = document.createElement('div');
        cloud.classList.add('cloud');
        cloud.x = gameArea.offsetWidth - 200;
        cloud.style.left = cloud.x + 'px';
        cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
        gameArea.appendChild(cloud);
        scene.lastCloudSpawn = timeStamp;
    }

    let clouds = document.querySelectorAll('.cloud');
    clouds.forEach(cloud => {
        cloud.x -= game.speed;
        cloud.style.left = cloud.x + 'px';

        if (cloud.x + clouds.offsetWidth <= 0) {
            cloud.parentElement.removeChild(cloud);
        }
    });

    // Add bugs
    if (timeStamp - scene.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
        let bug = document.createElement('div');
        bug.classList.add('bug');
        bug.x = gameArea.offsetWidth - 60;
        bug.style.left = bug.x + 'px';
        bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
        gameArea.appendChild(bug);
        scene.lastBugSpawn = timeStamp;
    }

    // Modify bug position
    let bugs = document.querySelectorAll('.bug');
    bugs.forEach(bug => {
        bug.x -= game.speed * 3;
        bug.style.left = bug.x + 'px';
        if (bug.x + bugs.offsetWidth <= 0) {
            bug.parentElement.removeChild(bug);
        }
    });

    bugs.forEach(bug => {
        if (isCollision(wizard, bug)) {
            gameOverAction();
        }

        fireballs.forEach(fireball => {
            if (isCollision(fireball, bug)) {
                scene.score += game.bugKillBonus;
                bug.parentElement.removeChild(bug);
                fireball.parentElement.removeChild(fireball);
            }
        })
    })

    //Apply score
    gamePoints.textContent = scene.score;

    if (scene.isActiveGame) {
        window.requestAnimationFrame(gameAction);
    }
}

function addFireball() {
    let fireball = document.createElement('div');

    fireball.classList.add('fire-ball');
    fireball.style.top = (player.y + player.height / 3 - 5) + 'px';
    fireball.x = player.x + player.width;
    fireball.style.left = fireball.x + 'px';
    gameArea.appendChild(fireball);
}

function isCollision(firstElement, secondElement) {
    let firstRect = firstElement.getBoundingClientRect();
    let secondRect = secondElement.getBoundingClientRect();
    
    return !(firstRect.top > secondRect.botton ||
        firstRect.botton < secondRect.top ||
        firstRect.right < secondRect.left ||
        firstRect.left > secondRect.right);
}

function gameOverAction() {
    scene.isActiveGame = false;
    gameOver.classList.remove('hide');
}

// TODO: Refactor