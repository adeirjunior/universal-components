var k=Object.defineProperty;var b=(t,o,e)=>o in t?k(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e;var r=(t,o,e)=>b(t,typeof o!="symbol"?o+"":o,e);import{x as g}from"./lit-element-B-NARBzP.js";const x=`
    label {
        display: flex;
        align-items: center;
        font-weight: 600;
        justify-content: space-between;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #1E3A8A;
        background-color: #F0F8FF;
        border-radius: 12px;
        padding: 16px 24px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, box-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
    }

    input[type="checkbox"] {
        margin-right: 16px;
        transform: scale(1.4);
        accent-color: #1E40AF; 
        transition: transform 0.2s ease;
    }

    ::slotted(*) {
        margin: 0;
        padding: 0;
    }

    ::slotted([slot="description"]) {
        color: #6B7280;
        font-size: 14px;
        font-weight: 400;
    }

    ::slotted([slot="age"]) {
        color: #EF4444;
        font-size: 14px;
        font-weight: 400;
    }

    label:hover {
        background-color: #E0F7FF;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    }

    input[type="checkbox"]:checked {
        transform: scale(1.75);
        background-color: #2563EB;
    }

    input[type="checkbox"]:checked + span {
        color: #2563EB; 
    }

    input[type="checkbox"]:checked + span + ::slotted(*) {
        color: #2563EB; 
    }
`,f=`
    <label>
        <input type="checkbox" />
        <span><slot></slot></span>
        <slot name="description"></slot>
        <slot name="age"></slot>
    </label>
`;class y extends HTMLElement{constructor(){super();r(this,"checkbox",null);const e=this.attachShadow({mode:"open"}),a=document.createElement("style");a.textContent=x,e.appendChild(a);const c=document.createElement("template");c.innerHTML=f,e.appendChild(c.content.cloneNode(!0)),this.checkbox=e.querySelector("input")}static get observedAttributes(){return["checked"]}attributeChangedCallback(e,a,c){e==="checked"&&this.updateChecked(c)}connectedCallback(){console.log("Adicionado")}disconnectedCallback(){console.log("Removido")}updateChecked(e){this.checkbox&&(this.checkbox.checked=e!=null&&e!=="false")}}customElements.define("todo-item",y);const w={title:"Components/TodoItem",component:"todo-item",argTypes:{checked:{control:"boolean"}}},u=({checked:t})=>g`
    <todo-item checked="${t}">
        Buy Milk
        <p slot="description">Description</p>
        <p slot="age">Age</p>
    </todo-item>
`,s={render:u,args:{checked:!1}},n={render:u,args:{checked:!0}};var l,d,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: false
  }
}`,...(i=(d=s.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const F=["Default","Checked"];export{n as Checked,s as Default,F as __namedExportsOrder,w as default};
