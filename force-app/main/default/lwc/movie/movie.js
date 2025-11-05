import { LightningElement, api } from 'lwc';

export default class Movie extends LightningElement {
    @api movieName;
    @api releaseYear;
    @api genre;
}