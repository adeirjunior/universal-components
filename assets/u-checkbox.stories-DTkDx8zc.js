var m=Object.defineProperty;var b=(c,t,e)=>t in c?m(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var a=(c,t,e)=>b(c,typeof t!="symbol"?t+"":t,e);import{x}from"./lit-element-B-NARBzP.js";const C=`
    input[type="checkbox"] {
        margin-right: 16px;
        transform: scale(1.4);
        accent-color: #1E40AF; 
        transition: transform 0.2s ease;
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
    <input type="checkbox" />
`;class g extends HTMLElement{constructor(){super();a(this,"checkbox",null);const e=this.attachShadow({mode:"open"}),s=document.createElement("style");s.textContent=C,e.appendChild(s);const o=document.createElement("template");o.innerHTML=f,e.appendChild(o.content.cloneNode(!0)),this.checkbox=e.querySelector("input")}static get observedAttributes(){return["checked"]}attributeChangedCallback(e,s,o){e==="checked"&&this.updateChecked(o)}updateChecked(e){this.checkbox&&(this.checkbox.checked=e!=null&&e!=="false")}}customElements.define("u-checkbox",g);const T={title:"Components/UCheckbox",component:"u-checkbox",argTypes:{checked:{control:"boolean"}}},i=({checked:c})=>x`
  <u-checkbox checked="${c}"></u-checkbox>
`,r={render:i,args:{checked:!1}},n={render:i,args:{checked:!0}};var d,h,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: false
  }
}`,...(l=(h=r.parameters)==null?void 0:h.docs)==null?void 0:l.source}}};var p,u,k;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: Template,
  args: {
    checked: true
  }
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const S=["Default","Checked"];export{n as Checked,r as Default,S as __namedExportsOrder,T as default};
