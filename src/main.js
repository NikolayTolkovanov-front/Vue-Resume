import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
	faCircleDown,
	faMagnifyingGlass,
	faLocationDot,
	faEnvelope,
	faPhone,
	faSun,
	faMoon,
	faXmark,
	faArrowUp,
} from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faTelegram, faGithub, faVk } from '@fortawesome/free-brands-svg-icons';


/* add icons to the library */
library.add(faCircleDown, faMagnifyingGlass, faTelegram, faGithub, faVk, faFacebook, faLocationDot, faEnvelope, faPhone,faSun, faMoon, faXmark, faArrowUp)

createApp(App)
	.use(router)
	.use(BackToTop)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');

const appTheme = localStorage.getItem('theme');

// Check what is the active theme and change theme when user clicks on the theme button in header.
if (
	appTheme === 'dark' &&
	document.querySelector('body').classList.contains('app-theme')
) {
	document.querySelector('body').classList.add('bg-primary-dark');
} else {
	document.querySelector('body').classList.add('bg-secondary-light');
}
