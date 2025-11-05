import { LightningElement } from 'lwc';

export default class WelcomeSpinner extends LightningElement {
    isLoading = true;

    connectedCallback() {
        
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
}