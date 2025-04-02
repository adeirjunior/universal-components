import { UCardBodyCSS } from "./u-card-body.css";
import { UCardBodyHtml } from "./u-card-body.html";

export class UCardBody extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = UCardBodyCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = UCardBodyHtml;
    shadow.appendChild(template.content.cloneNode(true));

  }
}
