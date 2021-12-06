import { isAuthenticated } from './auth.js';

function updateNavigation(){
    if (isAuthenticated()) {
        let guestNavItems = document.getElementsByClassName('guest');
    
        for (const navItem of guestNavItems) {
            navItem.classList.add('hidden');
        }
    }
}

export default {
    updateNavigation
}