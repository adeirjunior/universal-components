import "./../index";
import { html } from "lit";

export default {
  title: "Components/UInput",
  component: "u-input",
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' }
  },
};

const Template = ({ value, placeholder, required, disabled }: { value: string, placeholder: string, required: boolean, disabled: boolean }) => html`
  <u-input value="${value}" placeholder="${placeholder}" disabled="${disabled}" required="${required}" style="max-width: 500px;"/>
`;

export const Default = {
  render: Template,
  args: {
    value: '',
    placeholder: 'Placeholder text',
    required: false,
    disabled: false
  }
};
