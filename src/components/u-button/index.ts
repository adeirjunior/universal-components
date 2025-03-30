import { UButtonHTML } from "./u-button.html";
import { UButtonCSS } from "./u-button.css";

export class UButton extends HTMLElement {
  shadow: ShadowRoot;
  buttonElement: HTMLButtonElement | null;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    style.textContent = UButtonCSS;
    this.shadow.appendChild(style);

    const template = document.createElement("template");
    template.innerHTML = UButtonHTML;
    this.shadow.appendChild(template.content.cloneNode(true));

    this.buttonElement = this.shadow.querySelector("button");
    this.updateAttributes();
  }

  static get observedAttributes() {
    return ["variant", "radius", "size", "disabled", "aria-label"];
  }

  attributeChangedCallback(_name: string, _oldValue: string, _newValue: string) {
    this.updateAttributes();
  }

  connectedCallback() {
    if (this.buttonElement) {
      this.buttonElement.addEventListener("click", (event: MouseEvent) => {
        if (this.hasAttribute("disabled")) {
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }
  }

  updateAttributes() {
    if (this.buttonElement) {
      this.buttonElement.className = `btn ${this.getAttribute("variant") || "default"} ${this.getAttribute("size") || "md"}`;
      this.buttonElement.style.borderRadius = this.getAttribute("radius") || "4px";
      this.buttonElement.disabled = this.hasAttribute("disabled");
      if (this.hasAttribute("aria-label")) {
        this.buttonElement.setAttribute("aria-label", this.getAttribute("aria-label") || "");
      }
    }
  }
}

customElements.define("u-button", UButton);
