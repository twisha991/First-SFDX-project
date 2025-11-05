import { LightningElement } from 'lwc';

export default class SearchBox extends LightningElement {
    keyword = '';

    handleInputChange(event) {
        this.keyword = event.target.value;
    }

    handleSearchClick = () => {
        this.dispatchEvent(new CustomEvent('search', {
            detail: { keyword: this.keyword }
        }));
    }
}