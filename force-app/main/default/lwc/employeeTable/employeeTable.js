import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeTable extends LightningElement {
    employees;

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        registerListener('employeelistupdate', this.handleEmployeeList, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleEmployeeList(data) {
        this.employees = data;
    }
}