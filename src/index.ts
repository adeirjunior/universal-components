import { UCard, UCardActions, UCardBody, UCardHeader } from './components/u-card';
import { UButton } from './components/u-button';
import { UCheckbox } from './components/u-checkbox';
import  {UInput } from './components/u-input'

customElements.define("u-button", UButton);
customElements.define('u-card', UCard);
customElements.define('u-card-actions', UCardActions);
customElements.define('u-card-body', UCardBody);
customElements.define('u-card-header', UCardHeader);
customElements.define('u-checkbox', UCheckbox);
customElements.define('u-input', UInput);

export { UCard, UCardActions, UCardBody, UCardHeader } from './components/u-card';
export { UButton } from './components/u-button';
export type { UButtonProps } from './components/u-button';
export { UCheckbox } from './components/u-checkbox';
export type { UCheckboxProps } from './components/u-checkbox';
