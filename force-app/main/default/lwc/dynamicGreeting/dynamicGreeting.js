import { LightningElement } from 'lwc';

export default class DynamicGreeting extends LightningElement {
    greeting = 'World';
    color = 'white';

    handleNameChange(event) {
        this.greeting = event.target.value;
    }

    handleColorChange(event) {
        this.color = event.target.value || 'white';
        const box = this.template.querySelector('[data-id="greetingBox"]');
        if (box) {
            box.style.backgroundColor = this.color;
            box.style.padding = '1rem';
        }
    }
}