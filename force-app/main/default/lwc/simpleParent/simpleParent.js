import { LightningElement } from 'lwc';

export default class SimpleParent extends LightningElement {
    page = 1;

    handlePagination(event) {
        this.page = event.detail.page;
        console.log('Current Page:', this.page);
    }
}