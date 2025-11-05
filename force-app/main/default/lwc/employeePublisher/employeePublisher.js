import { LightningElement, wire } from 'lwc';
import { fireEvent } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeePublisher extends LightningElement {
    @wire(CurrentPageReference)
    pageRef;

    publishEmployees() {
        const employees = [
            { id: 1, name: 'Twisha Kumar', role: ' Software Engineer' },
            { id: 2, name: 'Shweta Yenaji', role: 'Manager' },
            { id: 3, name: 'Yashika Shukla', role: 'HR' },
            { id: 4, name: 'Avanti Joshi', role: 'Jr.Software Engineer' },
        ];

        fireEvent(this.pageRef, 'employeelistupdate', employees);
    }
}