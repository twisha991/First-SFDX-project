import { LightningElement, api } from 'lwc';

export default class RoomTile extends LightningElement {
    @api room;          // Room object {id, name, capacity}
    @api isBooked = false; // Flag to determine button type

    get buttonLabel() {
        return this.isBooked ? 'Cancel' : 'Book Room';
    }

    get buttonVariant() {
        return this.isBooked ? 'destructive' : 'brand';
    }

    get iconName() {
        return this.isBooked ? 'utility:event' : 'utility:building';
    }

    handleAction() {
        const actionType = this.isBooked ? 'cancel' : 'book';
        this.dispatchEvent(new CustomEvent('roomaction', {
            detail: { id: this.room.id, action: actionType }
        }));
    }
}