export const UButtonCSS = /*css*/ `
  .btn {
    background-color: #25262B;
    border: 0;
    padding: 1.25em;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    font-weight: 600;
    font-size: .75rem;
    transition: background-color 0.2s ease-in-out;
  }

  .btn:hover {
    background-color: #1A1B1E;
  }

  .btn:disabled {
    background-color: #555;
    cursor: not-allowed;
    opacity: 0.6;
  }

  .btn.primary {
    background-color: #007BFF;
  }

  .btn.primary:hover {
    background-color: #0056b3;
  }

  .btn.secondary {
    background-color: #6C757D;
  }

  .btn.secondary:hover {
    background-color: #545B62;
  }

  .btn.sm {
    padding: 0.5em;
    font-size: 0.65rem;
  }

  .btn.md {
    padding: 1em;
    font-size: 0.85rem;
  }

  .btn.lg {
    padding: 1.5em;
    font-size: 1rem;
  }

  ::slotted(*) {
    margin: 0;
    padding: 0;
    color: inherit;
  }
`
