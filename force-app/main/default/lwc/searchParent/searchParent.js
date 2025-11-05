import { LightningElement } from 'lwc';

export default class SearchParent extends LightningElement {
    wordList = [
        'pen', 'pencil', 'cherry', 'eraser', 'strawberry',
        'pineapple', 'grape', 'litchi', 'kiwi', 'raspberry',
        'mango', 'twisha', 'orange', 'bread', 'almonds',
        'shweta', 'yashika', 'avanti', 'cashews', 'watermelon'
    ];

    resultMessage = '';

    handleSearch(event) {
        const keyword = event.detail.keyword.toLowerCase();
        if (this.wordList.includes(keyword)) {
            this.resultMessage = 'Found';
        } else {
            this.resultMessage = 'Not Found';
        }
    }
}