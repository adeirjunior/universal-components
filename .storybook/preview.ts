import type { Preview } from "@storybook/web-components";
import { html } from "lit";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => html/*html*/ `
      <div
        style="
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100%; 
          padding: 20px;
          background-color: #ffffff;"
      >
        ${story()}
      </div>
    `,
  ],
};

export default preview;
