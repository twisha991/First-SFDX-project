import { LightningElement, track } from 'lwc';

export default class ProductInventory extends LightningElement {
    @track searchKey = '';
    @track sortedBy = 'name';
    @track sortedDirection = 'asc';

    columns = [
        { label: 'Product Name', fieldName: 'name', sortable: true },
        { label: 'Category', fieldName: 'category', sortable: true },
        { label: 'Price', fieldName: 'price', type: 'currency', sortable: true },
        { label: 'Stock Status', fieldName: 'stockStatus', sortable: true }
    ];

    products = [
        { id: '1', name: 'Laptop', category: 'Electronics', price: 75000, stockStatus: 'In Stock' },
        { id: '2', name: 'Smartphone', category: 'Electronics', price: 45000, stockStatus: 'Out of Stock' },
        { id: '3', name: 'Chair', category: 'Furniture', price: 5000, stockStatus: 'In Stock' },
        { id: '4', name: 'Notebook', category: 'Stationery', price: 50, stockStatus: 'In Stock' },
        { id: '5', name: 'Pen ', category: 'Accessories', price: 80, stockStatus: 'Out of Stock' }
    ];

   
    }

    handleSearch(event) {
        this.searchKey = event.target.value;
    }

    handleSort(event) {
        this.sortedBy = event.detail.fieldName;
        this.sortedDirection = event.detail.sortDirection;
    }

    handleSortedDirection() {
        this.sortedDirection = this.sortedDirection === 'asc' ? 'desc' : 'asc';
        return this.sortedDirection;

    }

