export const UCardCSS = /*css*/ `
    :host {
        display: block;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        max-width: 400px;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: 1em 2em;
    }

    ::slotted([slot="top"]) {
        display: flex;
        gap: 1em;
        font-size: 2rem;
    }

    ::slotted([slot="body"]) {
        padding: 1em 0;
        color: #333;
    }

    ::slotted([slot="bottom"]) {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        border-top: 1px solid #ddd;
        padding-top: 0.5em;
    }
`;
