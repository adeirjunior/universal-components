import { UCardHeaderCSS } from "./u-card-header.css";
import { UCardHeaderHtml } from "./u-card-header.html";

export class UCardHeader extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = UCardHeaderCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = UCardHeaderHtml;
    shadow.appendChild(template.content.cloneNode(true));

  }
}
