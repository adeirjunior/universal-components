export const UCheckboxCSS = /*css*/ `
    input[type="checkbox"] {
        margin-right: 16px;
        transform: scale(1.4);
        accent-color: #1E40AF; 
        transition: transform 0.2s ease;
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
