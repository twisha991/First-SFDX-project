import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SldsDemo extends LightningElement {
    name = '';
    email = '';
    message = '';

    handleChange(event) {
        const inputId = event.target.dataset.id;
        this[inputId] = event.target.value;
    }

    handleClick() {
        console.log('handleClick! ' + this.name + ' ' + this.email + ' ' + this.message);
        if (this.name == '' || this.email == '' || this.message == '') {
            this.showToast('Error', 'Please fill all the fields!', 'error');
            return;
        }

        this.showToast('Success', 'Form Submitted Successfully!', 'success');
        this.name = '';
        this.email = '';
        this.message = '';
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({ title, message, variant }));
    }

    data = [
        {
            id: 1,
            name: 'John',
            age: 25,
            city: 'New York'
        },
        {
            id: 2,
            name: 'Jane',
            age: 30,
            city: 'San Francisco'
        },]

    columns = [
        {
            label: 'Name',
            fieldName: 'name'
        },
        {
            label: 'Age',
            fieldName: 'age'
        },
        {
            label: 'City',
            fieldName: 'city'
        }
    ]

    handleRemove() {
        console.log('Pill removed');
    }

    progressValue = 55;
    increaseProgress() {
        if (this.progressValue < 100) {
            this.progressValue += 10;
        }
    }
}   