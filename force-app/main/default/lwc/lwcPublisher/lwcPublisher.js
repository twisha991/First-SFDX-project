import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class LwcPublisher extends LightningElement {
    handleClick() {
        const message = 'Hello from LWC Publisher!';
        pubsub.fire('messageEvent', { message });
    }
}