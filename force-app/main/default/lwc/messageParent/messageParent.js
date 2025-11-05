import { LightningElement } from 'lwc';

export default class MessageParent extends LightningElement {
    inputMessage = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
    }

    sendMessageToChild() {
        const child = this.template.querySelector('c-message-child');
        child.updateMessage(this.inputMessage);
    }
}
