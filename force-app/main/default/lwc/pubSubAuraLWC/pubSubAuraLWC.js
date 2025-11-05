import { LightningElement, api } from 'lwc';
import pubsub from './pubsub';

export default class PubSubAuraLWC extends LightningElement {
    @api
    registerEvent(eventName, callback) {
        pubsub.register(eventName, callback);
    }

    @api
    fireEvent(eventName, payload) {
        pubsub.fire(eventName, payload);
    }
}