import { UCard } from './components/u-card';
import { UButton } from './components/u-button';
import { UCheckbox } from './components/u-checkbox';

customElements.define("u-button", UButton);
customElements.define('u-card', UCard);
customElements.define('u-checkbox', UCheckbox);

export { UCard } from './components/u-card';
export type { UCardProps } from './components/u-card';
export { UButton } from './components/u-button';
export type { UButtonProps } from './components/u-button';
export { UCheckbox } from './components/u-checkbox';
export type { UCheckboxProps } from './components/u-checkbox';
