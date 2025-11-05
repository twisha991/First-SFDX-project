import { LightningElement } from 'lwc';

export default class ToggleList extends LightningElement {
    showCities=false;
    handleCheckBoxChange(event){
        this.showCities=event.target.checked;
    }
}