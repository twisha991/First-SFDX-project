import { LightningElement, track } from 'lwc';

export default class MeetingRoomDashboard extends LightningElement {
    @track availableRooms = [
        { id: '1', name: 'Sunflower', capacity: 5 },
        { id: '2', name: 'Rose', capacity: 20 },
        { id: '3', name: 'Lily', capacity: 25 },
        { id: '4', name: 'Orchid', capacity: 15 },
        { id: '5', name: 'Daisy', capacity: 30 }
    ];

    @track bookedRooms = [];

    handleRoomAction(event) {
        const { id, action } = event.detail;
        if (action === 'book') {
            const room = this.availableRooms.find(r => r.id === id);
            if (room) {
                this.bookedRooms = [...this.bookedRooms, room];
                this.availableRooms = this.availableRooms.filter(r => r.id !== id);
            }
        } else if (action === 'cancel') {
            const room = this.bookedRooms.find(r => r.id === id);
            if (room) {
                this.availableRooms = [...this.availableRooms, room];
                this.bookedRooms = this.bookedRooms.filter(r => r.id !== id);
            }
        }
    }
}