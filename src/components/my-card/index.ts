import { todoItemCSS } from './my-card.css.ts';
import { todoItemHtml } from './my-card.html.ts';

export class MyCard extends HTMLElement {
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

customElements.define('my-card', MyCard);

document.addEventListener("DOMContentLoaded", () => {
  const todoItem = document.querySelector("todo-item");

  if (!todoItem) {
    console.error("Elemento <todo-item> não encontrado no DOM.");
    return;
  }

  setInterval(() => {
    const isChecked = todoItem.getAttribute("checked") === "true";
    todoItem.setAttribute("checked", (!isChecked).toString());
  }, 500);
});
