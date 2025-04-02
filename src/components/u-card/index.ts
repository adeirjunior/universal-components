import { UCardCSS } from './u-card.css.ts';
import { UCardHtml } from './u-card.html.ts';
export { UCardActions} from './u-card-actions/index.ts';
export { UCardBody } from './u-card-body/index.ts';
export { UCardHeader } from './u-card-header/index.ts';

export class UCard extends HTMLElement {

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = UCardCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = UCardHtml;
    shadow.appendChild(template.content.cloneNode(true));

    const section = shadow.querySelector('section')!;
    section.className = this.className;
    section.style.cssText = this.style.cssText;
  }
}
