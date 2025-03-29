# Universal Web Components

This library contains a collection of reusable and framework-agnostic Web Components that can be easily integrated into any web project. No need for complex setups or frameworks. Simply add the code to your projects and start using them.

## 🚀 Installation

### Install via npm

If you are using npm to manage your dependencies, run the following command:

```bash
npm install universal-wc
```

### Include directly in HTML

If you prefer not to use npm, you can simply add the JavaScript file directly to your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/universal-wc/dist/universal-wc.es.js"></script>
```

## 🛠️ Using the Components

Once installed, you can start using the components directly in your HTML code.

### Example usage of `todo-item`

```html
<todo-item checked="true">
  <span>Buy milk</span>
  <span slot="description">Task description</span>
  <span slot="age">Today</span>
</todo-item>
```

### Available Attributes

#### `checked` (Boolean)

Defines the state of the checkbox (`true` or `false`).

### Customization via CSS

The library uses **Shadow DOM**, so you can style the components within the component's scope directly. If you need further customization, you can use global styles or **CSS Variables**.

## 📦 Available Components

The library currently contains the following components:

### `todo-item`

A task list item with a checkbox, using slots for dynamic content insertion.

- **Attributes:**
  - `checked`: Defines whether the item is checked or not.

### Example usage

```html
<todo-item checked="true">
  <span>Task to be done</span>
  <span slot="description">Task description</span>
  <span slot="age">Today</span>
</todo-item>
```

## ⚙️ Development

### Running Storybook

To visualize the components and test their appearance, you can run Storybook.

1. **Install Storybook dependencies:**

   ```bash
   npm install @storybook/web-components --save-dev
   ```

2. **Run Storybook:**

   After installation, run the following command to start Storybook and view your components:

   ```bash
   npm run storybook
   ```

   This will open Storybook at `http://localhost:6006`, where you can view all available components.

## 🧑‍💻 Contributing

If you'd like to contribute to the library, follow these steps:

1. Fork the repository.
2. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/adeirjunior/universal-wc.git
   cd universal-wc
   npm install
   ```

3. Create a new branch for your changes:

   ```bash
   git checkout -b my-new-feature
   ```

4. Make your changes and submit a **pull request**.

All contributions are welcome!

## 📄 License

This library is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.
