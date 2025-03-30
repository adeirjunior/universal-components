import"./index-DADrbu0j.js";import{x as r}from"./lit-element-B-NARBzP.js";const u=`
    :host {
        display: block;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        background-color: #ffffff;
        font-family: Arial, sans-serif;
        max-width: 400px;
    }

    section {
        display: flex;
        flex-direction: column;
        padding: 1em 2em;
    }

    ::slotted([slot="top"]) {
        display: flex;
        gap: 1em;
        font-size: 2rem;
    }

    ::slotted([slot="body"]) {
        padding: 1em 0;
        color: #333;
    }

    ::slotted([slot="bottom"]) {
        display: flex;
        gap: 0.5em;
        justify-content: center;
        border-top: 1px solid #ddd;
        padding-top: 0.5em;
    }
`,l=`
    <section>
        <slot name="top"></slot>
        <slot name="body"></slot>
        <slot name="bottom"></slot>
    </section>
`;class d extends HTMLElement{constructor(){super();const t=this.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent=u,t.appendChild(s);const a=document.createElement("template");a.innerHTML=l,t.appendChild(a.content.cloneNode(!0))}static get observedAttributes(){return["checked"]}}customElements.define("u-card",d);const b={title:"Components/UCard",component:"u-card"},m=()=>r`
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
`,e={render:m};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: Template
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const g=["Default"];export{e as Default,g as __namedExportsOrder,b as default};
