import { UInputCSS } from "./u-input.css";
import { UInputHTML } from "./u-input.html";

export class UInput extends HTMLElement {
    input: HTMLInputElement | null = null;
    labelText: HTMLLabelElement | null = null;
    asterisk: HTMLSpanElement | null = null;

    static get observedAttributes() {
        return ["placeholder", "value"];
    }

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const style = document.createElement("style");
        style.textContent = UInputCSS;
        shadow.appendChild(style);

        const wrapper = document.createElement("div");
        wrapper.innerHTML = UInputHTML;
        shadow.appendChild(wrapper);

        this.input = shadow.querySelector("#input");
        this.labelText = shadow.querySelector("#label-text");

        if (this.input) {
            this.input.addEventListener("input", (e) => {
                this.dispatchEvent(new CustomEvent("change", {
                    detail: e.target ? (e.target as HTMLInputElement).value : null,
                    bubbles: true,
                    composed: true
                }));
            });
        }

        const label = shadow.querySelector('label')!;
        label.className = this.className;
        label.style.cssText = this.style.cssText;
    }

    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
        if (name === "placeholder") {
            if (this.input) {
                this.input.placeholder = newValue;
            }
        }
        if (name === "value") {
            if (this.input) {
                this.input.value = newValue;
            }
        }
        if (name === "required") {
            if (this.input) {
                this.input.value = newValue;
                if (this.asterisk)
                if (newValue) {
                    this.asterisk.style.display = "inline";
                } else {
                    this.asterisk.style.display = "none";
                }
            }
        }
    }
}