export const UInputCSS = /*css*/ `
    :host {
        display: block;
        border-radius: 8px;
        overflow: hidden;
        width: 100%;
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        padding: 8px;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    #label-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    #label-title #required-asterisk {
        margin-left: 4px;
    }

    #label-description {
        font-size: 12px;
        color: #666;
    }

    input {
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        outline: none;
        font-size: 14px;
    }

    input:focus {
        border-color: #007BFF;
    }

    #label-error {
        font-size: 12px;
        color: red;
        display: block;
        margin-top: 4px;
    }
`;