export declare class UButton extends HTMLElement {
    shadow: ShadowRoot;
    buttonElement: HTMLButtonElement | null;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(_name: string, _oldValue: string, _newValue: string): void;
    connectedCallback(): void;
    updateAttributes(): void;
}
