import { LightningElement } from 'lwc';

export default class ToggleParent extends LightningElement {
    handleToggle() {
        const child = this.template.querySelector('c-toggle-child');
        child.toggleVisibility();
    }
}