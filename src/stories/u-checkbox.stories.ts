import "./../index";
import { html } from "lit";

export default {
    title: "Components/UCheckbox",
    component: "u-checkbox",
    argTypes: {
        checked: { control: 'boolean' },
    },
};

const Template = ({ checked }: { checked: boolean }) => html`
  <u-checkbox checked="${checked}"></u-checkbox>
`;

export const Default = {
    render: Template,
    args: {
        checked: false,
    },
};

export const Checked = {
    render: Template,
    args: {
        checked: true,
    },
};
