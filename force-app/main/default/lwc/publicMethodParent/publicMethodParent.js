import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value='red';

    handleChange(evt){
        this.value=evt.target.value;
    }

    handleClick(){
        console.log('Parent - handleClick');
        const childComponent = this.template.querySelector('c-public-method-child');
        const returnMessage = childComponent.selectRadiobutton(this.value.toLowerCase());
        console.log(returnMessage);
    }
}