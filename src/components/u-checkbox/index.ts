import { UCheckboxCSS } from './u-checkbox.css';
import { UCheckboxHTML } from './u-checkbox.html';

export type UCheckboxProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "u-checkbox": UCheckboxProps;
    }
  }
}

export class UCheckbox extends HTMLElement {
  checkbox: HTMLInputElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = UCheckboxCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = UCheckboxHTML;
    shadow.appendChild(template.content.cloneNode(true));

    this.checkbox = shadow.querySelector('input');
  }

  static get observedAttributes() {
    return ['checked'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === 'checked') this.updateChecked(newValue);
  }

  updateChecked(value: string | null) {
    if (this.checkbox) {
      this.checkbox.checked = value != null && value !== 'false';
    }
  }
}

