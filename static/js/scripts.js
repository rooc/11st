import Alpine from 'alpinejs';
import log from "./modules/module.js";
import message from "./modules/message.js";
window.Alpine = Alpine;
Alpine.data("log", log);
Alpine.data("message", message);
Alpine.start();

log("Yo Man");