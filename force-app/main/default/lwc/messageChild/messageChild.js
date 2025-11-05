import { api, LightningElement } from 'lwc';

export default class MessageChild extends LightningElement {
    message = 'Default message from child';

    @api
    updateMessage(newMessage) {
        this.message = newMessage;
    }
}