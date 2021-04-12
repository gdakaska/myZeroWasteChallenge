import './footer.css';

import template from './footer.html'
import {translate} from "../../helpers/templateHelpers";
import PubSub from "pubsub-js";

const translations = {
  pl: {
    ownership: 'Pomysł & Wykonanie: Katarzyna Malec',
    firstRule: 'Redukcja stresu',
    secondRule: 'Redukcja strat',
    thirdRule: 'Zwiększona świadomość',
    email: 'katie@myworldprogramchallenge.pl',
    location: 'Lubelskie, Polska',
    copyright: 'Copyright © #zeroWasteChallenge 2019 | Wszelkie prawa zastrzeżone',
  },
  en: {
    ownership: 'Idea & Execution: Katarzyna Malec',
    firstRule: 'Reduce stress',
    secondRule: 'Reduce waste',
    thirdRule: 'Raise awareness',
    email: 'katie@myworldprogramchallenge.pl',
    location: 'Lubelskie, Poland',
    copyright: 'Copyright © #zeroWasteChallenge 2019 | All rights reserved',
  }
};

class Footer {

  constructor() {
    this.connect = this.connect.bind(this);
    this.render = this.render.bind(this);
  }

  connect() {
    document.querySelector("[data-id='app-nav-button-en']")
        .addEventListener("click", () => PubSub.publish('change-language', 'en'));
    document.querySelector("[data-id='app-nav-button-pl']")
        .addEventListener("click", () => PubSub.publish('change-language', 'pl'));
  }

  render() {
    this.rootNode = document.getElementById('footer');
    this.rootNode.innerHTML = translate(template, 'footer', translations);
  }
}

const footer = new Footer();

export {
  footer,
  translations
};
