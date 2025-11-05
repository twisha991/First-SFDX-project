import { api, LightningElement } from 'lwc';

export default class ToggleChild extends LightningElement {
    isVisible = true;

    @api
    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }
}