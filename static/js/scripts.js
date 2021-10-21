import Alpine from 'alpinejs';
import log from "./modules/module.js";
import message from "./modules/message.js";
Alpine.data("log", log);
Alpine.data("message", message);
window.Alpine = Alpine;
Alpine.start();

log("Yo Alpine 2");