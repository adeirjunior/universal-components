export declare const todoItemCSS = "\n    label {\n        display: flex;\n        align-items: center;\n        font-weight: 600;\n        justify-content: space-between;\n        font-family: 'Inter', sans-serif;\n        font-size: 16px;\n        color: #1E3A8A;\n        background-color: #F0F8FF;\n        border-radius: 12px;\n        padding: 16px 24px;\n        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n        transition: background-color 0.3s, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;\n    }\n\n    input[type=\"checkbox\"] {\n        margin-right: 16px;\n        transform: scale(1.4);\n        accent-color: #1E40AF; \n        transition: transform 0.2s ease;\n    }\n\n    ::slotted(*) {\n        margin: 0;\n        padding: 0;\n    }\n\n    ::slotted([slot=\"description\"]) {\n        color: #6B7280;\n        font-size: 14px;\n        font-weight: 400;\n    }\n\n    ::slotted([slot=\"age\"]) {\n        color: #EF4444;\n        font-size: 14px;\n        font-weight: 400;\n    }\n\n    label:hover {\n        background-color: #E0F7FF;\n        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);\n    }\n\n    input[type=\"checkbox\"]:checked {\n        transform: scale(1.75);\n        background-color: #2563EB;\n    }\n\n    input[type=\"checkbox\"]:checked + span {\n        color: #2563EB; \n    }\n\n    input[type=\"checkbox\"]:checked + span + ::slotted(*) {\n        color: #2563EB; \n    }\n";
