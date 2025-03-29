import './../components/todo-item'
import { html } from 'lit';

export default {
    title: 'Components/TodoItem',
    component: 'todo-item',
    argTypes: {
        checked: { control: 'boolean' },
    },
};

const Template = ({ checked }: { checked: boolean }) => html/*html*/`
    <todo-item checked="${checked}">
        Buy Milk
        <p slot="description">Description</p>
        <p slot="age">Age</p>
    </todo-item>
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
