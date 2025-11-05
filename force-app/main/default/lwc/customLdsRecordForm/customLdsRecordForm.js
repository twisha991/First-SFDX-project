import { api, LightningElement } from 'lwc';

export default class CustomLdsRecordForm extends LightningElement {
    @api
    recordId = '001NS00001ufI6qYAE';

    @api
    objectApiName;

    handleSucess(evt){
        this.recordId = evt.detail.id;
    }
}