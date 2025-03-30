declare global {
    namespace JSX {
        interface IntrinsicElements {
            "u-checkbox": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                checked?: boolean;
            };
            "u-button": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                variant?: "default" | "primary" | "secondary";
                radius?: string;
                size?: "sm" | "md" | "lg";
                disabled?: boolean;
            };
            "u-card": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

export { };
