export const todoItemCSS = /*css*/ `
    label {
        display: flex;
        align-items: center;
        font-weight: 600;
        justify-content: space-between;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #1E3A8A;
        background-color: #F0F8FF;
        border-radius: 12px;
        padding: 16px 24px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    input[type="checkbox"] {
        margin-right: 16px;
        transform: scale(1.4);
        accent-color: #1E40AF; 
        transition: transform 0.2s ease;
    }

    ::slotted(*) {
        margin: 0;
        padding: 0;
    }

    ::slotted([slot="description"]) {
        color: #6B7280;
        font-size: 14px;
        font-weight: 400;
    }

    ::slotted([slot="age"]) {
        color: #EF4444;
        font-size: 14px;
        font-weight: 400;
    }

    label:hover {
        background-color: #E0F7FF;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    }

    input[type="checkbox"]:checked {
        transform: scale(1.75);
        background-color: #2563EB;
    }

    input[type="checkbox"]:checked + span {
        color: #2563EB; 
    }

    input[type="checkbox"]:checked + span + ::slotted(*) {
        color: #2563EB; 
    }
`;
