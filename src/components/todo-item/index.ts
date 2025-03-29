import { todoItemCSS } from './todo-item.css';
import { todoItemHtml } from './todo-item.html';

export class TodoItem extends HTMLElement {
  checkbox: HTMLInputElement | null = null;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const style = document.createElement('style');
    style.textContent = todoItemCSS;
    shadow.appendChild(style);

    const template = document.createElement('template');
    template.innerHTML = todoItemHtml;
    shadow.appendChild(template.content.cloneNode(true));

    this.checkbox = shadow.querySelector('input');
  }

  static get observedAttributes() {
    return ['checked'];
  }

  attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null) {
    if (name === 'checked') this.updateChecked(newValue);
  }

  connectedCallback() {
    console.log("Adicionado")
  }

  disconnectedCallback() {
    console.log("Removido")
  }

  updateChecked(value: string | null) {
    if (this.checkbox) {
      this.checkbox.checked = value != null && value !== 'false';
    }
  }
}

customElements.define('todo-item', TodoItem);
