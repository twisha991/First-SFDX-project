import { LightningElement } from 'lwc';

export default class AccountManagerLDSForms extends LightningElement {
    recordId = '001NS00001ufI6qYAE';

    successHandler(evt){
        this.recordId = evt.detail.id;
    }
}