import { html } from "lit";
import "./../index";

export default {
  title: "Components/UButton",
  component: "u-button",
  argTypes: {
    variant: { control: "text" },
    radius: { control: "text" },
    size: { control: "text" },
    disabled: { control: "boolean" },
    "aria-label": { control: "text" }
  },
};

interface TemplateProps {
  variant: string;
  radius: string;
  size: string;
  disabled: boolean;
  ariaLabel: string;
}

const Template = ({
  variant,
  radius,
  size,
  disabled,
  ariaLabel,
}: TemplateProps) => html`
  <u-button
    variant="${variant}"
    radius="${radius}"
    size="${size}"
    ?disabled="${disabled}"
    aria-label="${ariaLabel}"
  >
    Button Text
  </u-button>
`;

export const Default = {
  render: Template,
  args: {
    variant: "default",
    radius: "4px",
    size: "md",
    disabled: false,
    ariaLabel: "Button"
  },
};
