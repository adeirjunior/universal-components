import { UCardCSS } from './u-card.css.ts';
import { UCardHtml } from './u-card.html.ts';

export type UCardProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  title?: string;
  content?: string;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "u-card": UCardProps;
    }
  }
}

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

  }

  static get observedAttributes() {
    return ['checked'];
  }
}
