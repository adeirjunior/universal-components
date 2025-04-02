import { UCardActionsCSS } from "./u-card-actions.css";
import { UCardActionsHtml } from "./u-card-actions.html";

export class UCardActions extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = UCardActionsCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = UCardActionsHtml;
    shadow.appendChild(template.content.cloneNode(true));

  }
}
