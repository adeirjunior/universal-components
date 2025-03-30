import "./../components/u-card";
import "./../components/u-button";
import { html } from "lit";

export default {
  title: "Components/UCard",
  component: "u-card",
};

const Template = () => html`
  <u-card>
    <div slot="top">Title</div>
    <div slot="body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum
        condimentum metus, eu feugiat odio porttitor ut. Nam vitae dignissim
        leo, sit amet dictum velit. Vivamus arcu libero, faucibus at convallis
        ac, pulvinar eget arcu. Morbi iaculis nulla nibh, at lacinia libero
        elementum ut.
      </p>
      <p>
        Sed venenatis non ligula sit amet tristique. Sed sit amet purus
        faucibus, sodales magna nec, dignissim ipsum. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Etiam consequat erat luctus arcu
        pellentesque dignissim. Interdum et malesuada fames ac ante ipsum primis
        in faucibus. Quisque tempus ullamcorper urna, eu facilisis lectus tempus
        sit amet. Aenean varius mauris tortor, et semper nulla feugiat a.
      </p>
      <p>
        Pellentesque posuere, erat at dapibus placerat, est neque commodo mi,
        eget ultrices orci nisl sit amet libero. Nullam a aliquam risus, sit
        amet congue dui. Quisque efficitur eleifend ante et pretium.
      </p>
    </div>
    <div slot="bottom">
      <u-button>Button Text</u-button>
    </div>
  </u-card>
`;

export const Default = {
  render: Template,
};
