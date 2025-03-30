# Universal Web Components

This library contains a collection of reusable and framework-agnostic Web Components that can be easily integrated into any web project. No need for complex setups or frameworks. Simply add the code to your projects and start using them.

## ✅ Completed Components

- [x] `u-checkbox` - Customizable checkbox  
- [x] `u-button` - Button with support for variants, sizes, and accessibility  
- [x] `u-card` - Card component with header, body, and footer  

## 🛠️ To-Do Components  

### 🟢 Buttons & Inputs

- [ ] `u-icon-button` - Compact button with an icon only  
- [ ] `u-toggle-button` - Toggle button (on/off)  
- [ ] `u-switch` - Styled switch  
- [ ] `u-radio` - Radio button  
- [ ] `u-input` - Text input field  
- [ ] `u-textarea` - Multiline text input  
- [ ] `u-select` - Dropdown select field  
- [ ] `u-slider` - Range slider  
- [ ] `u-file-upload` - File upload input  

### 🏗️ Structure & Layout

- [ ] `u-container` - Responsive layout container  
- [ ] `u-grid` - Flexible grid system  
- [ ] `u-row` & `u-column` - Row and column-based layout  
- [ ] `u-divider` - Visual separator line  
- [ ] `u-stack` - Spacing management component  
- [ ] `u-dialog` - Modal/Dialog box  

### 🖼️ Display & Feedback

- [ ] `u-avatar` - User profile avatar  
- [ ] `u-badge` - Small visual indicator (e.g., notifications)  
- [ ] `u-tooltip` - Tooltip for additional info on hover  
- [ ] `u-progress` - Progress bar  
- [ ] `u-spinner` - Loading indicator  
- [ ] `u-toast` - Floating notifications  

### 📋 Lists & Tables

- [ ] `u-list` - Standard list  
- [ ] `u-list-item` - List item with icon and actions  
- [ ] `u-table` - Customizable table  
- [ ] `u-pagination` - Pagination component  

### 🧭 Navigation

- [ ] `u-tabs` - Tabbed navigation  
- [ ] `u-navbar` - Navigation bar  
- [ ] `u-sidebar` - Side menu  
- [ ] `u-breadcrumbs` - Breadcrumb navigation  
- [ ] `u-accordion` - Expandable/collapsible section  

### 📑 Miscellaneous

- [ ] `u-icon` - Customizable icons  
- [ ] `u-carousel` - Image/content slider  
- [ ] `u-collapse` - Collapsible section  
- [ ] `u-alert` - Alert box  

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

### Example usage of `u-card`

```html
<u-card>
  <div slot="top">Title</div>
  <p>Lorem Ipsum</p>
  <span slot="bottom">
      <u-button>Button Text</u-button>
  </span>
</u-card>
```

### Customization via CSS

The library uses **Shadow DOM**, so you can style the components within the component's scope directly. If you need further customization, you can use global styles or **CSS Variables**.

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
