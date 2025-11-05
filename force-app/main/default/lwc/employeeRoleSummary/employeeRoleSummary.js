import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeRoleSummary extends LightningElement {
    roleSummary = [];

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback() {
        registerListener('employeelistupdate', this.handleEmployeeList, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    handleEmployeeList(data) {
        const summaryMap = {};

        data.forEach(emp => {
            const role = emp.role.trim();
            summaryMap[role] = (summaryMap[role] || 0) + 1;
        });

        this.roleSummary = Object.keys(summaryMap).map(role => ({
            role,
            count: summaryMap[role]
        }));
    }
}
