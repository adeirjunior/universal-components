var i=Object.defineProperty;var r=(n,e,t)=>e in n?i(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var a=(n,e,t)=>r(n,typeof e!="symbol"?e+"":e,t);const s=`
<button>
    <slot></slot>
</button>
`,d=`
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
`;class l extends HTMLElement{constructor(){super();a(this,"shadow");a(this,"buttonElement");this.shadow=this.attachShadow({mode:"open"});const t=document.createElement("style");t.textContent=d,this.shadow.appendChild(t);const o=document.createElement("template");o.innerHTML=s,this.shadow.appendChild(o.content.cloneNode(!0)),this.buttonElement=this.shadow.querySelector("button"),this.updateAttributes()}static get observedAttributes(){return["variant","radius","size","disabled","aria-label"]}attributeChangedCallback(t,o,b){this.updateAttributes()}connectedCallback(){this.buttonElement&&this.buttonElement.addEventListener("click",t=>{this.hasAttribute("disabled")&&(t.preventDefault(),t.stopPropagation())})}updateAttributes(){this.buttonElement&&(this.buttonElement.className=`btn ${this.getAttribute("variant")||"default"} ${this.getAttribute("size")||"md"}`,this.buttonElement.style.borderRadius=this.getAttribute("radius")||"4px",this.buttonElement.disabled=this.hasAttribute("disabled"),this.hasAttribute("aria-label")&&this.buttonElement.setAttribute("aria-label",this.getAttribute("aria-label")||""))}}customElements.define("u-button",l);
