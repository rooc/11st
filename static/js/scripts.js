import Alpine from 'alpinejs';
import log from "./modules/module.js";
window.Alpine = Alpine;
Alpine.start();

log("Yo Man");

document.addEventListener('alpine:init', () => {
	Alpine.data('message', () => ({
		msg: "Hello World Yo!"
	}))
})
