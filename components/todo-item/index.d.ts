export declare class TodoItem extends HTMLElement {
    checkbox: HTMLInputElement | null;
    constructor();
    static get observedAttributes(): string[];
    attributeChangedCallback(name: string, _oldValue: string | null, newValue: string | null): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updateChecked(value: string | null): void;
}
