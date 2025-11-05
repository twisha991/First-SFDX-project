import { LightningElement } from 'lwc';

export default class ProductList extends LightningElement {
    products = [
        { id: 1, productName: 'Laptop', productPrice: 75000 },
        { id: 2, productName: 'Phone', productPrice: 30000 },
        { id: 3, productName: 'Headphones', productPrice: 5000 }
    ];

    handlePriceChange(event) {
        const { productId, newPrice } = event.detail;
        this.products = this.products.map(product =>
            product.id === productId ? { ...product, productPrice: newPrice } : product
        );
    }
}



