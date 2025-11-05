import { api, LightningElement } from 'lwc';

export default class Paginator extends LightningElement {
    @api page;

    handlePrevious = () => {
        if (this.page > 1) {
            this.dispatchEvent(new CustomEvent('pagination', {
                detail: { page: this.page - 1 }
            }));
        }
    }

    handleNext = () => {
        this.dispatchEvent(new CustomEvent('pagination', {
            detail: { page: this.page + 1 }
        }));
    }
}