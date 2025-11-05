import { LightningElement, api } from 'lwc';

export default class ProductCard extends LightningElement {
    @api productInfo;

    handlePriceInput(event) {
        const newPrice = parseFloat(event.target.value);
        const productId = this.productInfo.id;

        this.dispatchEvent(new CustomEvent('pricechange', {
            detail: { productId, newPrice }
        }));
    }
}
