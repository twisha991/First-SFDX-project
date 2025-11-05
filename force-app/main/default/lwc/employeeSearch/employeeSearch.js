import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterAllListeners } from 'c/pubSub';
import { CurrentPageReference } from 'lightning/navigation';

export default class EmployeeSearch extends LightningElement {
    employees = [];
    filteredEmployees = [];
    searchTerm = '';

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
        this.filterEmployees();
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase();
        this.filterEmployees();
    }

    filterEmployees() {
        if (!this.searchTerm) {
            this.filteredEmployees = this.employees;
        } else {
            this.filteredEmployees = this.employees.filter(emp =>
                emp.name.toLowerCase().includes(this.searchTerm)
            );
        }
    }
}