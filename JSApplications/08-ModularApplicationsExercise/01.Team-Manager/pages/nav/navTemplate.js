import { html } from './../../node_modules/lit-html/lit-html.js'

export let navTemplate = () => html`
<a href="/home" class="site-logo">Team Manager</a>
<nav>
    <a href="/browse-teams" class="action">Browse Teams</a>
    <a href="/login" class="action">Login</a>
    <a href="/register" class="action">Register</a>
    <a href="/my-teams" class="action">My Teams</a>
    <a href="javascript:void(0)" class="action">Logout</a>
</nav>`;