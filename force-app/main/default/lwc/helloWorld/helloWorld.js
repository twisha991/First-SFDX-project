import { LightningElement } from 'lwc';
import backgroundUrl from '@salesforce/resourceUrl/sachinTen';

export default class HelloWorld extends LightningElement {
 
    greeting = 'World';
     salesForceImage = backgroundUrl;

    
    
    handleChange(evt) {
        this.greeting = evt.target.value;
    }
}



