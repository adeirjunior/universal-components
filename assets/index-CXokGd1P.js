var c=Object.defineProperty;var d=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var a=(n,e,t)=>d(n,typeof e!="symbol"?e+"":e,t);const r=`
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
`,i=`
    <section>
        <slot name="top"></slot>
        <slot name="body"></slot>
        <slot name="bottom"></slot>
    </section>
`;class l extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=r,e.appendChild(t);const o=document.createElement("template");o.innerHTML=i,e.appendChild(o.content.cloneNode(!0))}static get observedAttributes(){return["checked"]}}const u=`
<button>
    <slot></slot>
</button>
`,b=`
  .btn {
    background-color: #25262B;
    border: 0;
    padding: 1.25em;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
    font-weight: 600;
    font-size: .75rem;
    transition: background-color 0.2s ease-in-out;
  }

  .btn:hover {
    background-color: #1A1B1E;
  }

  .btn:disabled {
    background-color: #555;
    cursor: not-allowed;
    opacity: 0.6;
  }

  .btn.primary {
    background-color: #007BFF;
  }

  .btn.primary:hover {
    background-color: #0056b3;
  }

  .btn.secondary {
    background-color: #6C757D;
  }

  .btn.secondary:hover {
    background-color: #545B62;
  }

  .btn.sm {
    padding: 0.5em;
    font-size: 0.65rem;
  }

  .btn.md {
    padding: 1em;
    font-size: 0.85rem;
  }

  .btn.lg {
    padding: 1.5em;
    font-size: 1rem;
  }

  ::slotted(*) {
    margin: 0;
    padding: 0;
    color: inherit;
  }
`;class h extends HTMLElement{constructor(){super();a(this,"shadow");a(this,"buttonElement");this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=b,this.shadow.appendChild(t);const o=document.createElement("template");o.innerHTML=u,this.shadow.appendChild(o.content.cloneNode(!0)),this.buttonElement=this.shadow.querySelector("button"),this.updateAttributes()}static get observedAttributes(){return["variant","radius","size","disabled","aria-label"]}attributeChangedCallback(t,o,s){this.updateAttributes()}connectedCallback(){this.buttonElement&&this.buttonElement.addEventListener("click",t=>{this.hasAttribute("disabled")&&(t.preventDefault(),t.stopPropagation())})}updateAttributes(){this.buttonElement&&(this.buttonElement.className=`btn ${this.getAttribute("variant")||"default"} ${this.getAttribute("size")||"md"}`,this.buttonElement.style.borderRadius=this.getAttribute("radius")||"4px",this.buttonElement.disabled=this.hasAttribute("disabled"),this.hasAttribute("aria-label")&&this.buttonElement.setAttribute("aria-label",this.getAttribute("aria-label")||""))}}const m=`
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
`,p=`
    <input type="checkbox" />
`;class f extends HTMLElement{constructor(){super();a(this,"checkbox",null);const t=this.attachShadow({mode:"open"}),o=document.createElement("style");o.textContent=m,t.appendChild(o);const s=document.createElement("template");s.innerHTML=p,t.appendChild(s.content.cloneNode(!0)),this.checkbox=t.querySelector("input")}static get observedAttributes(){return["checked"]}attributeChangedCallback(t,o,s){t==="checked"&&this.updateChecked(s)}updateChecked(t){this.checkbox&&(this.checkbox.checked=t!=null&&t!=="false")}}customElements.define("u-button",h);customElements.define("u-card",l);customElements.define("u-checkbox",f);
