import { LightningElement } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/sachinII';

export default class HelloWorld extends LightningElement {
    // Model
    greeting = 'World';
    salesForceImage = backgroundUrl;
    labelText = 'defaultLabel';

    // Controller
    handleChange(evt) {
        this.greeting = evt.target.value;
    }
    eventListenerInParent(evt){
        this.labelText = evt.target.label;
    }
}