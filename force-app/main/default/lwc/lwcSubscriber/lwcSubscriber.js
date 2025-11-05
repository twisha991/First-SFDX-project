import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterListener } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class LwcSubscriber extends LightningElement {
    message = '';

    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('messageEvent', this.handleMessage, this);
    }

    disconnectedCallback() {
        unregisterListener('messageEvent', this.handleMessage, this);
    }

    handleMessage(payload) {
        this.message = payload;
    }
}