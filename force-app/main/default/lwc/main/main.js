import EmployeePublisher from './employeePublisher.js';
import EmployeeTable from './employeeTable.js';
import EmployeeCards from './employeeCards.js';

const pageRef = { attributes: { page: 'main' } };

const publisher = new EmployeePublisher(pageRef);
new EmployeeTable(pageRef);
new EmployeeCards(pageRef);

document.getElementById('publish-btn').addEventListener('click', () => {
    publisher.publishEmployees();
});
